import nodemailer from "nodemailer" 
import dotenv from "dotenv"
import sgMail from "@sendgrid/mail"

dotenv.config();
const sendnodemailer= async (res,req)=>{
try {
    const transporter = nodemailer.createTransport({
        host: "stmp.gmail.com",
        port: 587 ,
        auth:{
            user : process.env.USER ,
            pass: process.env.PASS ,
        }
    });
    const info= await transporter.sendMail({
        from: '"adem "<zad1zad1990@get.com>' ,
        to : "zouane.adem@gmail.com",
        subject : " nodemailer ",
        text : " hello from node js server"
    });
} catch (error) {
    res.json(error);
}
}
const sendgridemail =()=>{
    sgMail.setApiKey(process.env.APISENDGRID);
    const mes = {
        to : process.env.sender ,
        from : process.env.receiver,
        subject : "send grid email",
        text : " hello from node js server"
    };
    sgMail.send(mes).then(()=>{
        console.log("email sent with sucess")
    }).catch(error=> console.log(error)) ;
}

 export default {sendgridemail , sendnodemailer} ;