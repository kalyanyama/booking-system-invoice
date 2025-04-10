require("dotenv").config();

const PRIVATE_KEY = Buffer.from(process.env.PRIVATE_KEY, "base64").toString(
  "ascii"
);
const PUBLIC_KEY = Buffer.from(process.env.PUBLIC_KEY, "base64").toString(
  "ascii"
);

module.exports = { PRIVATE_KEY, PUBLIC_KEY };
