const express = require("express");
const routerClientes = express.Router();

const {crearCliente,promedioEdadCliente , listarCliente} = require("../controllers/user");

routerClientes.post("/", crearCliente);
routerClientes.get("/promedio", promedioEdadCliente);
routerClientes.get("/", listarCliente);

module.exports = routerClientes;
