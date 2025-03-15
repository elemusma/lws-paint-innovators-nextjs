import { google } from "googleapis";
import nodemailer from "nodemailer";

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN!;
const GMAIL_USER = process.env.GMAIL_USER!;

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const referer = req.headers.get("referer") || ""; // Get the referring URL

    const { first_name, last_name, user_name, user_email, user_phone, project_type, location, user_subject, message, embed_url,position } = body;

    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: GMAIL_USER,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken.token || "",
      },
    });

    // Determine form type based on pathname
    let emailSubject = "New Form Submission";
    let emailIntro = "";
    let emailHtml = "";

    if (referer.includes("/request-quote")) {
      // Quote Request Form
      emailSubject = `Quote Request from ${first_name} ${last_name}`;
      emailIntro = `<p>Quote Request from ${first_name} ${last_name}:</p>`;
      emailHtml = `
        <p><strong>Name:</strong> ${first_name} ${last_name}</p>
        <p><strong>Email:</strong> ${user_email}</p>
        <p><strong>Phone:</strong> ${user_phone}</p>
        <p><strong>Project Type:</strong> ${project_type}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Message:</strong> ${message}</p>
      `;
    } else if (referer.includes("/contact")) {
      // Contact Form
      emailSubject = `Latino Web Studio: "${user_name}"`;
      emailIntro = `<p>Someone submitted a form. See details below:</p>`;
      emailHtml = `
        <p><strong>Name:</strong> ${user_name}</p>
        <p><strong>Email:</strong> ${user_email}</p>
        <p><strong>Phone:</strong> ${user_phone}</p>
        <p><strong>Subject:</strong> ${user_subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `;
    } else if (referer.includes("/careers")) {
      // Careers Form (for any career submission)
      emailSubject = `Job Application: ${position} - ${first_name} ${last_name}`;
      emailIntro = `<p>New job application for <strong>${position}</strong>:</p>`;
      emailHtml = `
        <p><strong>Name:</strong> ${first_name} ${last_name}</p>
        <p><strong>Email:</strong> ${user_email}</p>
        <p><strong>Phone:</strong> ${user_phone}</p>
        <p><strong>Position:</strong> ${position}</p>
      `;
    } 
    else {
      return new Response(JSON.stringify({ error: "Invalid form submission." }), { status: 400 });
    }

    const mailOptions = {
      from: `"Latino Web Studio" <${GMAIL_USER}>`,
      to: "tadeoycuba@gmail.com",
      subject: emailSubject,
      html: `
        <table style="background-color: #f7f7f7; width: 100%;">
<tbody>
<tr>
<td>
<table style="margin: auto; padding-top:20px;padding-bottom: 20px;">
<tbody>
<tr>
<td style="text-align: center;"><img src="https://resources.latinowebstudio.com/wp-content/uploads/2025/01/Logo.png" alt="Logo" width="250px" height="auto" /></td>
</tr>
</tbody>
</table>
<table style="background-color: white; width: 100%; max-width: 600px; margin: auto; border-left: 15px solid #f7f7f7; border-right: 15px solid #f7f7f7;">
<tbody>
<tr>
<td style="padding: 20px 20px;">
${emailIntro}${emailHtml}
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
<td>Have questions about the form submission or the website?
Reach out to your web support at <a href="mailto:info@latinowebstudio.com">info@latinowebstudio.com</a></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
      `,
    };

    const result = await transport.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: "Email sent successfully!", data: result }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(JSON.stringify({ error: "Email failed to send." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
