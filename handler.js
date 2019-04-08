"use strict";

const sgMail = require("@sendgrid/mail");

module.exports.hello = function(context) {
  context.log("JavaScript HTTP trigger function processed a request.");

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: "rafael@novatics.com",
    from: "no-reply@novatics.com.br",
    subject: "Reminder Labor",
    html: "<strong>Please check out their activities at Labor</strong>"
  };
  sgMail.send(msg);

  context.res = {
    body: "Go Serverless v1.x! Your function executed successfully!"
  };

  context.done();
};
