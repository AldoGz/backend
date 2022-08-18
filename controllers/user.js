const { Pool } = require("pg");
const pool = new Pool({
  connectionString:process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const crearCliente = async (req, res) => {
  const {
    body: { nombre, apellido, fechaNacimiento },
  } = req;
  await pool.query(
    "INSERT INTO cliente(nombre,apellido,fechanacimiento) VALUES($1,$2,$3)",
    [nombre, apellido, fechaNacimiento]
  );

  res.json({
    message: "Cliente registrado",
    user: {
      nombre,
      apellido,
      fechaNacimiento,
    },
  });
};

const promedioEdadCliente = async (req, res) => {
  const { rows } = await pool.query(
    "SELECT AVG(EXTRACT(YEAR FROM AGE(fechanacimiento))) AS promedio FROM cliente"
  );
  const [promedio] = rows;
  res.json(promedio);
};

const listarCliente = async (req, res) => {
  const response = await pool.query("SELECT * FROM cliente");
  res.json(response.rows);
};

module.exports = {
  crearCliente,
  promedioEdadCliente,
  listarCliente,
};
