const PORT = process.env.PORT || 8080;
const express = require("express");
const app = express();
app.use(express.json());
app.get("/", function (req, res) {
  //when we get an http get request to the root/homepage
  res.send("Hello express templete");
});

app.listen(PORT, function () {
  console.log(`Listening on Port ${PORT}`);
});
