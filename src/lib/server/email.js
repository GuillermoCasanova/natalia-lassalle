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

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

export async function sendMail(pReceiver, pFormData) {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    if (pFormData.message.length <= 10 || pFormData.email <= 0 || pFormData.full_name.length <= 0) {
      let error = new Error('Missing required message data.');
      error.status = 400;
      error = Object.assign({ message: error.message }, error);
      throw error;
    }

    const transporter = nodemailer.createTransport({
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

    const mailOptions = {
      from: FROM,
      to: pReceiver,
      subject: `this is a test email from the MM contact form`,
      html: 'email body is here'
    };

    const info = await transporter.sendMail(mailOptions);
    return JSON.stringify(info);

  } catch (error) {
    if (error instanceof TypeError) {
      return JSON.stringify({ message: 'Nodemailer failed because of type error.' });
    }

    if (error.code) {
      return JSON.stringify({ message: 'Nodemailer failed.' });
    }

    return JSON.stringify(error);
  }
} 