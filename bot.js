const twit = require("twit"),
  config = require("./config.js");

var http = require("http"); //create a server object

var port = process.env.PORT || 3000;

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" }); // http header

    var url = req.url;

    if (url === "/") {
      res.write("<h1>Hi!<h1>"); //write a response
      res.end(); //end the response
    } else {
      res.write("<h1>Jesus Loves You! ❤️<h1>"); //write a response
      res.end(); //end the response
    }
  })
  .listen(port, function() {
    // eslint-disable-next-line no-console
    console.log(`Bot server started at port ${port}`);
  });

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
