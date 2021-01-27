const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`);
});

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: "rakeshhotker@gmail.com",
    pass: "rakeshhotker@123",
    clientId:
      "534873895904-3gqvjec5jjdv45j3i1pogblt60eh7t77.apps.googleusercontent.com",
    clientSecret: "tqWFd-A04SL_QgqZvmeX5v_E",
    refreshToken:
      "1//04sbpjZw6od-0CgYIARAAGAQSNwF-L9IrCb_0AyZ73ZGV355vGoFLJIuB3WHX-_YaV7ampQ7phrktUwlh_P2xLOaIEBuZ-LlrecE",
  },
});
let mailOptions = {
  from: "rakeshhotker@gmail.com",
  to: "rakeshhotker2000@gmail.com",
  subject: "Just testing",
  text: "Hi, everybody!",
  from: "rakeshhotker@gmail.com",
  to: "rakeshmusk@gmail.com",
  subject: "Just testing",
  text: "Hi, everybody!",
};

transporter.sendMail(mailOptions, function (err, data) {
  if (err) {
    console.log("Error" + err);
  } else {
    console.log("Email sent successfully");
  }
});
