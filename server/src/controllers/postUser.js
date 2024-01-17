const bcrypt = require('bcrypt');
const { User } = require('../models/Users.js');

async function postUser(req, res) {
  try {
    const { username, email, password } = req.body;

    // Validaciones de datos (por ejemplo, verificar que los campos no estén vacíos)

    // Hash de la contraseña antes de almacenarla
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    return res.status(201).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al crear el usuario' });
  }
}

module.exports = { postUser };
