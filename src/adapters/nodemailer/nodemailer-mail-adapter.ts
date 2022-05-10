import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';


const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "ea0f48af9454b9",
    pass: "1b26ba429b72b2"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
 async sendMail ({subject, body}: SendMailData) {
  await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Josue Leite <josueleite@outlook.com>',
    subject,
    html: body,
    
  })
 };
}