import { ServerClient } from "postmark";

export default async function Contact(req, res) {
  const apiKey = process.env.POSTMARK_API;
  const client = new ServerClient(apiKey);
  console.log(req.body);
  await client.sendEmail(
    {
      From: "hello@adamcodes.io",
      To: "hello@adamcodes.io",
      Subject: "New request from adamcodes.io contact form!",
      TextBody: `From: ${req.body.email}:\n\nSubject: ${req.body.subject}\n\n${req.body.message}`,
    },
    function (error, result) {
      if (error) {
        console.error("Unable to send via postmark: " + error.message);
        res.status = 500;
        return;
      }
      console.info("Sent to postmark for delivery");
      res.setHeader("Content-Type", "application/json");

      res.status = 200;
    }
  );
  res.end();
}
