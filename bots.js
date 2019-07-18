const twit = require("twit"),
  config = require("./config.js");

// eslint-disable-next-line no-console
console.log("Bot is alive!");

var Twitter = new twit(config);

function tweet() {
  let time = new Date();
  Twitter.post(
    "statuses/update",
    {
      status: `
      Jesus Loves You! ❤️ 
      \n ${time.toDateString()}
    `
    },
    (err, data, response) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log("error", err);
        throw new Error(err);
      } else {
        // eslint-disable-next-line no-console
        console.log("data => ", data);

        // eslint-disable-next-line no-console
        console.log("response => ", response);
      }
    }
  );
  // eslint-disable-next-line no-console
  console.log("Hey! Tweeting!");
}

// tweet();

// setInterval(tweet, 86400000);
setInterval(tweet, 500000);

//  Now tweets every 24 hours
