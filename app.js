import express from "express"
import dotenv from "dotenv"
import {sendnodemailer} from "./controllers/sendemail.js"
import {sendgridemail} from "./controllers/sendemail.js"
import {errorHandlerMiddleware} from "./middelware/errorHandler.js"
import {notFound}  from "./middelware/not-found.js"

const app = express();
dotenv.config();

app.get("/sendemail/grid",sendgridemail);
app.get("/sendemail",sendnodemailer);

app.use(notFound);
app.use(errorHandlerMiddleware);


const PORT = process.env.PORT || 5000; 
try{
    app.listen(PORT ,()=>{ console.log(`the server is listening to the PORT : ${PORT} `)}) ;
}catch(err)
{(err)=>console.log(err)} 