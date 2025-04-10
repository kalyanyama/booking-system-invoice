const express = require("express");
const app = express();
const { ApolloServer } = require("apollo-server-express");
const { createServer } = require("http");
const { typeDefs } = require("../schema/typeDefs");
const { resolvers } = require("../schema/resolvers");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const { AuthenticationForJwtToken } = require("../helpers/verifyToken");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true, limit: "10m" }));
app.use(bodyParser.json());
app.use(express.json({ limit: "10m" }));
// app.use((req, res, next) => {
//   const Error = new Error();
//   `${req.url} not found this url from server`;
//   Error.status = 500;
//   next(Error);
// });

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: "UnHandled Internal Error",
  });
});

app.use(AuthenticationForJwtToken);

const StartServer = async () => {
  const apolloServerOptions = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({
      headers: req.headers,
    }),
  });
  await apolloServerOptions.start();
  apolloServerOptions.applyMiddleware({ app, path: "/api" });
};
StartServer();

const server = createServer(app);

module.exports = server;
