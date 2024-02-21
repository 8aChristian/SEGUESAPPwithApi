const mongoose = require("mongoose");
// Se importa la biblioteca Mongoose para definir esquemas y modelos de la base de datos.

const userSchema = mongoose.Schema({
    // Se define un esquema de usuario utilizando el método Schema de Mongoose.
    id: {
        type: String,
        required: true
      },
      estado: {
        type: Boolean,
        required: true
      }
    });
    

module.exports = mongoose.model("User", userSchema);
// Se exporta el modelo de usuario creado a partir del esquema definido para su uso en otras partes de la aplicación.
