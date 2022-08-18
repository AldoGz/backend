const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

/* Middleware */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/* Middleware */


/* ROUTERS */
const routerClientes = require("./routers/user");
app.use("/api/cliente",routerClientes);

app.get("/", (req,res) => {
  res.send("Hola Mundo!");
})


app.listen(PORT, () => {
  console.log(
    `El servidor esta escuchando el puerto http://localhost:${PORT} ...`
  );
});
