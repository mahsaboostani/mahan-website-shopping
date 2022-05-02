const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
const app = express();
app.use(serveStatic(path.join(__dirname, "dist")));
const port = process.env.PORT || 80;
app.listen(port);

// const jsonServer = require("json-server");
// const server = jsonServer.create();
// const router = jsonServer.router(
//   "https://raw.githubusercontent.com/mahsaboostani/mahan-website-shopping/main/db.json"
// );
// const middlewares = jsonServer.defaults();

// server.use(middlewares);
// server.use(router);
// server.listen(3000, () => {
//   console.log("JSON Server is running");
// });
