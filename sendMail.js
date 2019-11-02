const sendMail = (html, to, subject, transporter) => {
  transporter.sendMail(
    {
      from: "The JS Post <thejspost@gmail.com>",
      to,
      subject,
      html
    },
    (err, info) => {
      if (err) {
        console.log(err);
        console.log("Error sending to: ", to);
      } else {
        console.log("Email sent to: ", to);
      }
    }
  );
};

module.exports = sendMail;
