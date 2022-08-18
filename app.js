const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

/* Middleware */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  //res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
/* Middleware */

/* ROUTERS */
const routerClientes = require("./routers/user");
app.use("/api/cliente", routerClientes);

app.get("/", (req, res) => {
  res.send("Hola Mundo!");
});

app.listen(PORT, () => {
  console.log(
    `El servidor esta escuchando el puerto http://localhost:${PORT} ...`
  );
});
