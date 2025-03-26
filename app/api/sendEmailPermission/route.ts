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
    const { first_name, last_name, user_email, subject, featured_product, detailed_summary, campaign_start_date, campaign_end_date, audience_reach, media_value, target_locations, country, has_contact, contact_first_name, contact_last_name, contact_email, selected_assets, file_link, agreement, embed_url } = body;

    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.GMAIL_USER, // Your Gmail address
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken.token || "",
      },
    });

    const mailOptions = {
      from: `"Latino Web Studio" <${process.env.GMAIL_USER}>`,
      to: "info@latinowebstudio.com,paintinnovators@outlook.com",
      subject: `Latino Web Studio: "${first_name}"`,
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
<p>Hello Paint Innovators! Tadeo here, someone is requesting brand permission. See details below:</p>
<p><strong>Name:</strong> ${first_name} ${last_name}</p>
<p><strong>Email:</strong> ${user_email}</p>
<p><strong>Subject:</strong> ${subject}</p>
<p><strong>Featured Product:</strong> ${featured_product}</p>
<p><strong>Detailed Summary:</strong> ${detailed_summary}</p>
<p><strong>Campaign Start Date:</strong> ${campaign_start_date}</p>
<p><strong>Campaign End Date:</strong> ${campaign_end_date}</p>
<p><strong>Audience Reach:</strong> ${audience_reach}</p>
<p><strong>Media Value:</strong> ${media_value}</p>
<p><strong>Target Locations:</strong> ${target_locations}</p>
<p><strong>Country:</strong> ${country}</p>
<p><strong>Has Contact?:</strong> ${has_contact}</p>
<p><strong>Contact First Name:</strong> ${contact_first_name}</p>
<p><strong>Contact Last Name:</strong> ${contact_last_name}</p>
<p><strong>Contact Email:</strong> ${contact_email}</p>
<p><strong>Selected Assets:</strong> ${selected_assets}</p>
<p><strong>File Link:</strong> ${file_link}</p>
<p><strong>Agreement:</strong> ${agreement}</p>
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
