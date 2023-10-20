import express from "express"
import {sendnodemailer} from "./controllers/sendemail.js"
import sendgridemail from "./controllers/sendemail.js"

const app = express();

app.use("/sendemail/grid",sendgridemail);
app.use("/sendemail",sendnodemailer)
app.use(undefinederror);


const PORT = process.env.PORT ; 

app.listen(Port ,()=>{ console.log("the server is listening to the PORT :  ", PORT).catch((err)=>{console.log(err)})});