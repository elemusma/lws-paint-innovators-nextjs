import { google } from "googleapis";
import nodemailer from "nodemailer";

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN!;

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { first_name, last_name, job_name,job_address_line1,job_address_line2,job_address_city,job_address_state,job_address_zip,general_contractor,user_email,user_phone,project_manager,start_date,quickbooks_time,bid_price, embed_url } = body;

    // const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        // type: "OAuth2",
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.NEXT_PUBLIC_EMAIL_APP_PASSWORD,
        // clientId: CLIENT_ID,
        // clientSecret: CLIENT_SECRET,
        // refreshToken: REFRESH_TOKEN,
        // accessToken: accessToken.token || "",
      },
    });

    const mailOptions = {
      from: `"Latino Web Studio" <${process.env.GMAIL_USER}>`,
      to: "info@latinowebstudio.com",
      subject: `PO Submittal: "${first_name}"`,
      html: `<table style="background-color: #f7f7f7; width: 100%;">
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
<p>Hi Paint Innovators! Someone filled the PO# Submittal form. See details below:</p>
<p><strong>Name:</strong> ${first_name} ${last_name}</p>
<p><strong>Job Name:</strong> ${job_name}</p>
<p><strong>Address 1:</strong> ${job_address_line1}</p>
<p><strong>Address 2:</strong> ${job_address_line2}</p>
<p><strong>City:</strong> ${job_address_city}</p>
<p><strong>State:</strong> ${job_address_state}</p>
<p><strong>ZIP:</strong> ${job_address_zip}</p>
<p><strong>General Contractor:</strong> ${general_contractor}</p>
<p><strong>Phone:</strong> ${user_phone}</p>
<p><strong>Email:</strong> ${user_email}</p>
<p><strong>Project Manager:</strong> ${project_manager}</p>
<p><strong>Start Date:</strong> ${start_date}</p>
<p><strong>Quickbooks Time:</strong> ${quickbooks_time}</p>
<p><strong>Bid Price:</strong> ${bid_price}</p>
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
</table>`,
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
