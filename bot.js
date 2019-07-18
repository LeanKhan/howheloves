const twit = require("twit"),
  config = require("./config.js");

var http = require("http"); //create a server object

var port = process.env.PORT || 3000;

// eslint-disable-next-line no-console
console.log("Bot is alive!");

var Twitter = new twit(config);

function tweet() {
  let time = new Date();
  Twitter.post(
    "statuses/update",
    {
      status: `
      Jesus Loves You! ❤️\n${time.toDateString()}
    `
    },
    err => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log("error", err);
        throw new Error(err);
      } else {
        // eslint-disable-next-line no-console
        console.log("Tweeted successfully!");
      }
    }
  );
}

// tweet();

setInterval(tweet, 86400000);
// setInterval(tweet, 500000);

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" }); // http header

    var url = req.url;

    if (url === "/") {
      res.write(`
        <html>
          <head>
            <title>HowHeLoves Twitter Bot</title>
          </head>
          <body style="background-color: pink; color: white;">
          <div>
          <h2>HowHeLoves❤️</h2>
          <p>Follow HowHeLoves❤️ on <a href="https://twitter.com/HowHeLoves3">Twitter</a></p>
        </div>
          </body>
        </html>
      `); //write a response
      res.end(); //end the response
    } else {
      res.write(`
      <h4 style="color: pink;">Woops! Page not found :/</h4>
      <h1>Jesus <i>still</i> Loves You! tho :) ❤️<h1>
      `); //write a response
      res.end(); //end the response
    }
  })
  .listen(port, function() {
    // eslint-disable-next-line no-console
    console.log(`Bot server started at port ${port}`);
  });

//  Now tweets every 24 hours
