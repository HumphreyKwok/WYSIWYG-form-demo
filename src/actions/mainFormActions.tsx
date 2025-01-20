"use server";

import { mainFormSchema } from "@/lib/zodSchema";
import nodemailer from "nodemailer";
import { google } from "googleapis";
const OAuth2 = google.auth.OAuth2;
const OAuth2Client = new OAuth2(
  process.env.GOOGLE_ID,
  process.env.GOOGLE_SECRET,
);
OAuth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

export const mainFormAction = async (data: unknown) => {
  const dataValidation = mainFormSchema.safeParse(data);

  if (dataValidation.error) {
    return { status: 400, message: "data validation failed" };
  }

  return { status: 200, data: dataValidation.data };
};

export const sendUserConfirmation = async (recipient: string) => {
  try {
    const accessToken = OAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.GOOGLE_USER,
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
        accessToken,
      },
    } as nodemailer.TransportOptions);

    const mailOptions = {
      from: `Hinzik <contact@hinzik.dev>`,
      to: recipient,
      subject: "We received you message",
      html: `<p>Thank you for your message, we can now communiate through this email tread. I will reply you when I have time, it usually take 1-2 days.</p>`,
    };

    const result = await transport.sendMail(mailOptions);

    if (result.accepted.includes(recipient)) {
      return { status: 200, message: "confirmation email delivered" };
    }

    return { status: 400, message: "confirmation email failed delivered" };
  } catch (error) {
    console.log(`failed to send email to ${recipient}, error: ${error}`);
    return { status: 500, message: "confirmation email failed delivered" };
  }
};
