import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';
import {HandleBarsConfig} from './hbsConfig'
import 'dotenv/config'


class SendRegistrationEmail{
    static sendEmail(receiverEmail, receiverName){
        let transport = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: 2525,
            auth:{
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        });
        transport.use('compile', hbs(HandleBarsConfig));
        let mailOptions = {
            from: `"Employee Managment System"<${process.env.MAIL_USER}>`,
            to: `${receiverEmail}`,
            subject: 'Notification of Registration',
            template: 'registration-email',
            context: {
                name: receiverName
            }
        }
        transport.sendMail(mailOptions, (error) => {
            if(error){
                return console.log(error)
            }
        })
    }
}

export default SendRegistrationEmail;