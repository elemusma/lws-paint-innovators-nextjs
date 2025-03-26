import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "");

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { first_name, last_name, user_email, user_phone, project_type, location, message, embed_url } = body;

    const senderEmail = process.env.RESEND_SENDER;
    if (!senderEmail) {
      return new Response(
        JSON.stringify({ error: "Sender email is not defined." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const data = await resend.emails.send({
      from: senderEmail,
      to: "info@latinowebstudio.com,paintinnovators@outlook.com",
      subject: `Quote Request from ${first_name} ${last_name}`,
      html: `<table style="background-color: #f7f7f7; width: 100%;">
<tbody>
<tr>
<td>
<table style="margin: auto; padding-top:20px;padding-bottom: 20px;">
<tbody>
<tr>
<td style="text-align: center;"><img src="https://resources.latinowebstudio.com/wp-content/uploads/2025/01/Logo.png" alt="Logo" width="200px" height="auto" /></td>
</tr>
</tbody>
</table>
<table style="background-color: white; width: 100%; max-width: 600px; margin: auto; border-left: 15px solid #f7f7f7; border-right: 15px solid #f7f7f7;">
<tbody>
<tr>
<td style="padding: 20px 20px;">
<p>Hello Paint Innovators! Tadeo here, someone requested a free estimate. See details below:</p>
      <p><strong>Name:</strong> ${first_name} ${last_name}</p>
             <p><strong>Email:</strong> ${user_email}</p>
             <p><strong>Phone:</strong> ${user_phone}</p>
             <p><strong>Project Type:</strong> ${project_type}</p>
             <p><strong>Location:</strong> ${location}</p>
             <p><strong>Message:</strong> ${message}</p>
             </td>
</tr>
</tbody>
</table>
<table style="margin: auto; padding: 20px; width: 100%; max-width: 600px; text-align: center;">
<tbody>
<tr>
<td>
<h4>Congrats on Your New Website Lead!</h4>
</td>
</tr>
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
</table>`
    });

    return new Response(
      JSON.stringify({ success: "Quote request sent successfully!", data }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(
      JSON.stringify({ error: "Email failed to send." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
