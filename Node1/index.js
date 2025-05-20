const express = require("express");
const mysql = require("mysql");
const PORT = 3000;
const app = express();

// Mysql connection
const db = mysql.createConnection({
  host: "localhost",
  password: "",
  user: "root",
  database: "node_db",
});

// server listen {PORT:3000}
app.listen(PORT, () => {
  console.log(`The server is run Now on  PORT: ${PORT} `);
});

// middleware for  parses json
app.use(express.json());

// add new product
app.post("/product", (req, res) => {
  const { name, price, description } = req.body;
  const sql =
    "INSERT INTO products (name, price, description) VALUES (?, ?, ?)";
  db.query(sql, [name, price, description], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// get all the Products
app.get("/product", (req, res) => {
  const sql = "SELECT * FROM `products`";

  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

// get single Product
app.get("/product/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM products WHERE id = ?";
  db.query(sql, [id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// updata single product
app.put("/product/:id", (req, res) => {
  const id = req.params.id;
  const { name, price, description } = req.body;
  const sql =
    "UPDATE products SET name = ?, price = ?, description = ? WHERE id = ?";
  db.query(sql, [name, price, description, id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// delete single product
app.delete("/product/:id", (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM products WHERE id = ?";
  db.query(sql, [id], (err, data) => {
    if (err) return res.json(err);
    return res.json({ message: "The product was deleted", data });
  });
});
