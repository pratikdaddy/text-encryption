const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { encrypt, decrypt } = require("./cryptoHelper");
require("dotenv").config();

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Serve i.html at root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "i.html"));
});

app.post("/encrypt", (req, res) => {
  const { text } = req.body;
  const encrypted = encrypt(text);
  res.send("Encrypted Text: " + encrypted);
});

app.post("/decrypt", (req, res) => {
  const { text } = req.body;
  try {
    const decrypted = decrypt(text);
    res.send("Decrypted Text: " + decrypted);
  } catch (err) {
    res.send("Decryption failed. Make sure the input is correct.");
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
