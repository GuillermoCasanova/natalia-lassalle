
import nodemailer from 'nodemailer'; 
import { google } from 'googleapis';
import dotenv from 'dotenv'; 

dotenv.config(); 

 const CLIENT_ID = process.env.client_id;
 const CLIENT_SECRET = process.env.client_secret; 
 const REDIRECT_URI = process.env.redirect_uri; 
 const REFRESH_TOKEN = process.env.refresh_token;
 const AUTH_USER = process.env.auth_user; 
 const FROM = process.env.auth_user;
 const USER_PASS = process.env.auth_user_pass;

const oAuth2Client  = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN}); 




//
// This is our route for sending support emails 
//
export async function POST({request})  {
  let information = await request.json();
  const messageId = await sendMail(information.receivers, information.formData); 
  return new Response(messageId); 
}



/**
 * @param {any} pReceiver
 */
export async function sendMail(pReceiver, pFormData) {


    try {

        const accessToken = await oAuth2Client.getAccessToken();

        console.log(pFormData); 

     if(pFormData.message.length <= 10  || pFormData.email <= 0 || pFormData.full_name.length <= 0) {
      let error = new Error('Missing required message data.');
      // @ts-ignore
      error.status = 400; 
      error = Object.assign({message: error.message}, error);
      throw error; 
    }

      
      // // create reusable transporter object using the default SMTP transport
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: "OAuth2", 
          user: AUTH_USER,
          pass: USER_PASS,
          clientId: CLIENT_ID, 
          clientSecret: CLIENT_SECRET, 
          refreshToken: REFRESH_TOKEN,
          accessToken: accessToken.token
        }
      });

      // // // setup email data with unicode symbols
      let mailOptions = {
        from: FROM, // list of receivers
          to: pReceiver,
          subject: `this is a test email from the MM contact form`, // Subject line
          html: 'email body is here' 
      };

        let info = await transporter.sendMail(mailOptions)
        return JSON.stringify(info);

    } catch(error) {

      if(error instanceof TypeError) {
        return JSON.stringify({message: 'Nodemailer failed because of type error.'});
      }

      if(error.code) {
        return JSON.stringify({message: 'Nodemailer failed.'});
      }

      return JSON.stringify(error);
    }
}; 
