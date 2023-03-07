var arr = [];
const router = async function (req, res) {
  if (req.url === "/api/my_name" && req.method === "GET") {
    // set the status code, and content-type
    res.writeHead(200, { "Content-Type": "application/json" });
    // send the data
    res.end(JSON.stringify(arr));
  }

  //  POST: /api/name
  if (req.url === "/api/save_name" /*&& req.method === "POST"*/) {
    try {
      const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      readline.question(
        "Input a name you want to be saved?",
        function(yourName)  {
          console.log(` ${yourName} added successfully!`);
          arr.push(yourName);
          readline.close();
        }
      );

      let body = "Enter a name";
      res.writeHead(200, { "Content-Type": "application/json" });
      //send response
      res.end(JSON.stringify(body));
    } catch (error) {
      console.log(error);
    }
  }

};

module.exports = router;