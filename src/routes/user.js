const express = require("express");
const User = require("../models/user");

const router = express.Router();

// create user
router.post("/users", (req, res) => {
  const { estado, posicion } = req.body; // Extrae solo los campos necesarios
  const newUser = new User({ estado, posicion }); // Crea un nuevo usuario con los campos requeridos
  
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


// update a user
router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { estado, posicion } = req.body; // Solo acepta los campos necesarios
  
  User.updateOne({ _id: id }, { $set: { estado, posicion } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
