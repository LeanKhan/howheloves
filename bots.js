const twit = require("twit"),
  config = require("./config.js");

var Twitter = new twit(config);

function tweet() {
  Twitter.post(
    "statuses/update",
    { status: "Jesus Loves You! ❤️" },
    (err, data, response) => {
      if (err) {
        console.log("error", err);
      }
    }
  );
}

tweet();

setInterval(tweet, 14400000);
