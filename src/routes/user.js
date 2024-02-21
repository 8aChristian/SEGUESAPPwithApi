const express = require("express");
const User = require("../models/user");

const router = express.Router();

// create user
router.post("/users", (req, res) => {
  const { estado } = req.body; // Solo extrae el campo 'estado'
  const { sector, fila, columna } = req.body; // Extrae el sector, fila y columna
  const id = `${sector},${fila},${columna}`; // Crea el ID combinando sector, fila y columna
  const newUser = new User({ estado, _id: id }); // Crea un nuevo usuario con el estado y el nuevo ID
  
  newUser.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
// get all users
router.get("/users", (req, res) => {
  User.find({}, 'estado posicion') // Proyecta solo los campos estado y posicion
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a user
router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  User.findById(id, 'estado posicion') // Proyecta solo los campos estado y posicion
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


// delete a user
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  User.deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { estado } = req.body; // Solo acepta el campo 'estado'
  
  User.updateOne({ _id: id }, { $set: { estado } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
