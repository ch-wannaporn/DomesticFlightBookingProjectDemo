import axios from "axios";

export const sendEmail = async (email: string, qrcode: string) => {
  await axios.post(
    process.env.MAIL_URL,
    {
      sender: {
        name: "Domestic Flight Booking Website",
        email: "ch.wannaporn_st@tni.ac.th",
      },
      to: [
        {
          email,
        },
      ],
      subject: "E-Tickets",
      htmlContent: `<p>Please find QR code attached and send it to boarding officers.</p>`,
      attachment: [
        {
          content: qrcode.replace("data:image/png;base64,", ""),
          name: "e-tickets.png",
        },
      ],
    },
    {
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": process.env.MAIL_API_KEY,
      },
    }
  );
};
