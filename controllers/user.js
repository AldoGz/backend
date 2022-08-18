const { Pool } = require("pg");
const pool = new Pool({
  connectionString:"postgres://wznxkrmblgldkl:32556ba7a006b9b7ce884752c82b10e0a771ba43d27c7e49b7ece9f86f57eef2@ec2-44-195-100-240.compute-1.amazonaws.com:5432/d8nveuepkqq936",
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
    "SELECT AVG(EXTRACT(YEAR FROM AGE(fechanacimiento)))::int AS promedio FROM cliente"
  );
  const [promedio] = rows;
  res.json(promedio);
};

const listarCliente = async (req, res) => {
  const response = await pool.query("SELECT id, CONCAT(nombre,' ',apellido) as cliente , EXTRACT(YEAR FROM AGE(fechanacimiento)) as edad FROM cliente");
  res.json(response.rows);
};

module.exports = {
  crearCliente,
  promedioEdadCliente,
  listarCliente,
};
