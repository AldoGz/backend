const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

function allowCrossDomain(req, res, next) {
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");

  var origin = req.headers.origin;
  if (_.contains(app.get("allowed_origins"), origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  if (req.method === "OPTIONS") {
    res.send(200);
  } else {
    next();
  }
}

/* Middleware */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(allowCrossDomain);
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
