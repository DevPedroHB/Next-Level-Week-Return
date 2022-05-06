import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "5c57c916877261",
        pass: "c7ad986f7d9398"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body}: SendMailData){
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Pedro Henrique Bérgamo <pedrohenriquebergamo.16@gmail.com>',
            subject,
            html: body
        });
    }
}