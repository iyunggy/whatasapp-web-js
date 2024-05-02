//create a basic node js with express app
const express = require("express");
const { client } = require("whatsapp-web.js");
const app = express();
const post = 3001;

app.listen(port, () => {
  console.log(`Serevre listening on the port::${port}`);
});
