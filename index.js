//create a basic node js with express app
const express = require("express");
const { Client, LocalAuth } = require("whatsapp-web.js");
const app = express();

const http = require("http").Server(app);
const qrcode = require("qrcode-terminal");

const port = 3001;

const allSessionObject = {};

const client = new Client({
  authStrategy: new LocalAuth(),
  webVersionCache: {
    type: "remote",
    remotePath:
      "https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2410.1.html",
  },
});

client.initialize();

client.on("loading_screen", (percent, message) => {
  console.log("LOADING SCREEN", percent, message);
});

client.on("qr", async (qr_string) => {
  // console.log("QR RECEIVED", qr_string);
  qrcode.generate(qr_string, { small: true });
});

client.on("ready", () => {
  console.log("client is ready");
});

client.on("message_create", async (msg) => {
  console.log(msg)
  if (msg.body == "PING") {
    client.sendMessage(msg.from, "PONG")
  }
})

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
