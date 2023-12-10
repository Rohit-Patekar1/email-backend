import { MailService } from "@sendgrid/mail";
import { connectToDatabase } from "..";
import { Collections } from "../util/enum";

export async function sendEmailService(emailData: any) {
  try {
    const emails: string[] = emailData.map((item: any) => item.email);
    console.log(emails);

    const sgMail = new MailService();
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
    const msg = {
      to: emails,
      from: "rohit.patekar.936@gmail.com",
      subject: "Sending with SendGrid is Fun",
      text: "and easy to do anywhere, even with Node.js",
      html: "<strong>and easy to do anywhere, even with Node.js</strong>",
      templateId: "d-068d49f107184a0bb5c2eef666d82c32",
    };

    await sgMail.send(msg, true);
    console.log("Email sent");
    console.log(emailData);
    
    for (const emailObj of emailData) {
      const { email, name, "year of birth\r": yearOfBirth } = emailObj;
      // Insert into MongoDB
      const timestamp = new Date();
      const db = (await connectToDatabase()).db("wallet-app");
      const collection = db.collection(Collections.emailData);
      await collection.insertOne({
        email,
        name,
        yearOfBirth: yearOfBirth,
        timestamp
      });
      console.log(`Data inserted for ${email}`);
    }
  } catch (error) {
    console.error("Error in sending email", error);
    throw error;
  }
}
