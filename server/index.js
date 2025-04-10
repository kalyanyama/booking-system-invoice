const server = require("./api/server");
const PORT = process.env.PORT || 3120;

process.on("uncaughtException", (err) => {
  console.error(`${new Date().toUTCString()} uncaughtException:`, err);
  process.exit(0);
});
process.on("unhandledRejection", (err) => {
  console.error(`${new Date().toUTCString()} unhandledRejection:`, err);
});

server.listen(PORT, () => {
  console.log(`SERVER LISTENING AT ${PORT} SUCCESSFULLY. HAPPY CODING !`);
});
