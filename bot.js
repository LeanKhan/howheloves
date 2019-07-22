"use strict";

require("dotenv").config();

const twit = require("twit"),
  config = require("./twit_config"),
  moment = require("moment-timezone");

// eslint-disable-next-line no-console
console.log("Bot is alive!");

var Twitter = new twit(config);

// ===== SERVERLESS ===== //

function tweet(time) {
  Twitter.post(
    "statuses/update",
    {
      status: `
      Jesus Loves You! ❤️\n\n${moment(time.getTime())
        .tz("Africa/Lagos")
        .format("dddd, MMM DD YYYY z")}
    `
    },
    err => {
      if (err) {
        // eslint-disable-next-line no-console
        // console.log("Twit Error => ", err);
        throw err;
      }
    }
  );
}

module.exports.tweet = (event, context, callback) => {
  let time = new Date();
  try {
    tweet(time);
    // eslint-disable-next-line no-console
    console.log("Tweeted successfully");
    return callback(null, "Tweeted Successfully");
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log("Twit Error => ", err);
    return callback(null, "Success, though error");
  }
};
