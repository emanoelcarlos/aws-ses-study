const express = require("express");
require("dotenv").config();

const app = express();
var AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });

app.listen(3001, () => {
  console.log("Listening port 3001 ...");
});

app.get("/", (req, res) => {
  // Create sendEmail params
  var params = {
    Destination: {
      /* required */
      CcAddresses: [],
      ToAddresses: ["emanoel.ferraz@evoy.io"],
    },
    Message: {
      /* required */
      Body: {
        /* required */
        Html: {
          Charset: "UTF-8",
          Data: "<p>Node.js and <strong>Amazon SES</strong> test e-mail</p>",
        },
        Text: {
          Charset: "UTF-8",
          Data: "Node.js and Amazon SES test e-mail",
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Test email",
      },
    },
    Source: "emanoel.carlos@hotmail.com" /* required */,
    ReplyToAddresses: [],
  };

  // Create the promise and SES service object
  var sendPromise = new AWS.SES({ apiVersion: "2010-12-01" })
    .sendEmail(params)
    .promise();

  // Handle promise's fulfilled/rejected states
  sendPromise
    .then(function (data) {
      console.log("then", data.MessageId);
    })
    .catch(function (err) {
      console.error("catch", err, err.stack);
    });
});
