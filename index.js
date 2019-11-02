require("dotenv").config();
const path = require("path");
const csv = require("csvtojson");
const aws = require("aws-sdk");
const nodemailer = require("nodemailer");
const inlineBase64 = require("nodemailer-plugin-inline-base64");

const createMail = require("./createMail");
const sendMail = require("./sendMail");

aws.config.loadFromPath(__dirname + "/awsconfig.json");

const transporter = nodemailer.createTransport({
  SES: new aws.SES()
});

transporter.use("compile", inlineBase64({ cidPrefix: "dsc_" }));

const csvFilePath = path.join(__dirname, "/", process.env.CSV_PATH);

csv()
  .fromFile(csvFilePath)
  .then(data => {
    for (var i = 0; i < data.length; i++) {
      //   console.log(data[i]);
      setTimeout(
        data =>
          sendMail(
            createMail(data.name),
            data.email,
            `The JS Post #${process.env.POST_NUMBER}`,
            transporter
          ),
        i * 300,
        data[i]
      );
    }
  });
