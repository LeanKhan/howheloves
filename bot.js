"use strict";

require("dotenv").config();

const twit = require("twit"),
  config = require("./twit_config");

// eslint-disable-next-line no-console
console.log("Bot is alive!");

var Twitter = new twit(config);

// ===== SERVERLESS ===== //

module.exports.tweet = (event, context, callback) => {
  let time = new Date();
  Twitter.post(
    "statuses/update",
    {
      status: `
      Jesus Loves You! ❤️\n\n${time.toDateString()}
    `
    },
    err => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log("error", err);
        // throw new Error(err);
        callback(null, "Error occurred => " + err);
      } else {
        // eslint-disable-next-line no-console
        console.log("Tweeted successfully!");
        callback(null, "Tweet successful!");
      }
    }
  );
};
