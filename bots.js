const twit = require("twit"),
  config = require("./config.js");

console.log("Bot is alive!");

var Twitter = new twit(config);

var time = new Date();

function tweet() {
  Twitter.post(
    "statuses/update",
    {
      status: `
      Jesus Loves You! ❤️
      ${time.toLocaleString()}
    `
    },
    (err, data, response) => {
      if (err) {
        console.log("error", err);
      } else {
        console.log(data);
      }
    }
  );
}

tweet();

setInterval(tweet, 14400000);
