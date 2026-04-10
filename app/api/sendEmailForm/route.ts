import { google } from "googleapis";
import nodemailer from "nodemailer";

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN!;
const RECAPTCHA_SECRET = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY!;

const PW_N8N_SPAM_WEBHOOK = 'https://n8n.precisewolf.net/webhook/54ebafa4-0ecb-408b-aa06-4913543a34f9';
const PW_N8N_SPAM_SECRET = '06b4e75591a91fb8fc6a1b96a535122cab39054d854690b1d7c94fdb6f427bfa';
const PW_N8N_FAIL_CLOSED = true; // true = block on n8n failure

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

export async function POST(req: Request) {
  try {

    const body = await req.json();
    // console.log("Form submission received:", body);
    const { user_name, user_email, user_phone,location, user_subject, message, embed_url, token} = body;
    // const operandA = parseInt(operand_a, 10);
    // const operandB = parseInt(operand_b, 10);
    // const expected = operandA + operandB;

    // ✅ 1. Verify the reCAPTCHA token with Google
    const captchaRes = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: RECAPTCHA_SECRET,
        response: token,
      }),
    });

    const captchaData = await captchaRes.json();

// 1. Math question validation
// if (!additional_info_1 || parseInt(additional_info_1, 10) !== expected) {
//   return new Response(JSON.stringify({ error: "Validation check failed." }), {
//     status: 400,
//     headers: { "Content-Type": "application/json" },
//   });
// }

if (body.job_title && body.job_title.trim() !== "") {
  return new Response(JSON.stringify({ error: "Bot detected." }), {
    status: 400,
    headers: { "Content-Type": "application/json" },
  });
}

// 2. reCAPTCHA validation
if (!captchaData.success || captchaData.score < 0.5) {
  return new Response(JSON.stringify({ error: "reCAPTCHA verification failed." }), {
    status: 400,
    headers: { "Content-Type": "application/json" },
  });
}

    // ✅ 2. Proceed with sending the email
    // const accessToken = await oAuth2Client.getAccessToken();
    // console.log("🔑 Access Token:", accessToken?.token);

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        // type: "OAuth2",
        user: process.env.GMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
        // clientId: CLIENT_ID,
        // clientSecret: CLIENT_SECRET,
        // refreshToken: REFRESH_TOKEN,
        // accessToken: accessToken.token || "",
      },
    });
    await transport.verify()
  .then(() => console.log("✅ Nodemailer is ready to send emails."))
  .catch((err) => console.error("❌ Nodemailer verify failed:", err));

  // n8n spam check
const spamPayload = {
  site: {
    name: 'Paint Innovators',
    url: embed_url, // ← from the destructured body
  },
  form: {
    id:    'contact',
    title: 'Contact Form',
  },
  contact: {
    name:    user_name,
    email:   user_email,
    phone:   user_phone,
    message: message,
  },
  request: {
    page_url:   embed_url,
    ip:         req.headers.get('cf-connecting-ip')
                ?? req.headers.get('x-forwarded-for')?.split(',')[0].trim()
                ?? '',
    user_agent: req.headers.get('user-agent') ?? '',
    timestamp:  new Date().toISOString(),
  },
  fields: [
    { id: 'user_name',    label: 'Name',     value: user_name },
    { id: 'user_email',   label: 'Email',    value: user_email },
    { id: 'user_phone',   label: 'Phone',    value: user_phone },
    { id: 'location',     label: 'Location', value: location },
    { id: 'user_subject', label: 'Subject',  value: user_subject },
    { id: 'message',      label: 'Message',  value: message },
  ],
};

try {
  const n8nRes = await fetch(PW_N8N_SPAM_WEBHOOK, {
    method: 'POST',
    headers: {
      'Content-Type':        'application/json',
      'X-PW-Webhook-Secret': PW_N8N_SPAM_SECRET,
    },
    body: JSON.stringify(spamPayload),
    signal: AbortSignal.timeout(10000), // 10s timeout like WP version
  });

  if (n8nRes.ok) {
    const n8nData = await n8nRes.json();
    const decision = (n8nData.decision ?? '').toLowerCase().trim();

    if (decision === 'block' || decision === 'review') {
      return new Response(JSON.stringify({ error: 'Your message was flagged as spam.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    // 'allow' falls through to send email
  } else if (PW_N8N_FAIL_CLOSED) {
    return new Response(JSON.stringify({ error: 'Unable to verify submission.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} catch {
  if (PW_N8N_FAIL_CLOSED) {
    return new Response(JSON.stringify({ error: 'Unable to verify submission.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  // fail open — continue to send email
}


    const mailOptions = {
      from: `"Precise Wolf Digital" <${process.env.GMAIL_USER}>`,
      to: "ted@precisewolf.com,paintinnovators.it@outlook.com",
      subject: `Paint Innovators - Website Lead: "${user_name}"`,
      html: `<table style="background-color: #f7f7f7; width: 100%;">
<tbody>
<tr>
<td>
<table style="margin: auto; padding-top:20px;padding-bottom: 20px;">
<tbody>
<tr>
<td style="text-align: center;"><img src="https://paintinnovators.com/assets/Logo-Paint-Innovators.png" alt="Logo" width="200px" height="auto" /></td>
</tr>
</tbody>
</table>
<table style="background-color: white; width: 100%; max-width: 600px; margin: auto; border-left: 15px solid #f7f7f7; border-right: 15px solid #f7f7f7;">
<tbody>
<tr>
<td style="padding: 20px 20px;">
<p>Hi Paint Innovators! Someone filled the contact form. See details below:</p>
<p><strong>Name:</strong> ${user_name}</p>
<p><strong>Email:</strong> ${user_email}</p>
<p><strong>Phone:</strong> ${user_phone}</p>
<p><strong>Location:</strong> ${location}</p>
<p><strong>Subject:</strong> ${user_subject}</p>
<p><strong>Message:</strong> ${message}</p>
</td>
</tr>
</tbody>
</table>
<table style="margin: auto; padding: 20px; width: 100%; max-width: 600px; text-align: center;">
<tbody>
<tr>
<td><em><small><p><strong>Submitted from:</strong> <a href="${embed_url}" target="_blank">${embed_url}</a></p></small></em></td>
</tr>
<tr>
<td style="padding:20px;"><p>Have questions about the form submission or the website?
Reach out to your web support at <a href="mailto:ted@precisewolf.com">ted@precisewolf.com</a></p></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>`,
    };

    const result = await transport.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: "Email sent successfully!", data: result }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("🔥 Email send error:", error instanceof Error ? error.stack : JSON.stringify(error));
    return new Response(JSON.stringify({ error: "Email failed to send." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
  
}