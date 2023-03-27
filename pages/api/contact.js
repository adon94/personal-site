import { ServerClient } from "postmark";

export default async function Contact(req, res) {
  const client = new ServerClient("c0df46f3-1853-4b98-b9dc-953e1f2437b2");
  console.log(req.body);
  await client.sendEmail(
    {
      From: "hello@adamcodes.io",
      To: "hello@adamcodes.io",
      Subject: req.body.subject,
      TextBody: req.body.message,
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
