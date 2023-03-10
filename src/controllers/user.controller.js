const { StatusCodes } = require('http-status-codes');
const db = require("../models");
const User = db.users

exports.findAllUsers = async (req, res) => {
  try {
    // Envía una respuesta al cliente con un objeto que contiene algunos de los valores obtenidos anteriormente
    res.json({
      success: true,
      message: {
        title: 'Lista',
        description: 'Usuarios',
      },
      result: {
        users: [
          {
            name: 'pepito',
          },
          {
            name: 'juanito',
          },
        ],
      },
    });
  } catch (err) {
    // Si ocurre un error, envía un mensaje de error al cliente
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: {
        title: 'Error',
        description: err.message,
      },
      result: {},
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const body = req.body;

    const user = await User.create(body);

    res.status(StatusCodes.CREATED).json({
      success: true,
      message: {
        title: 'Usuario creado',
        description: 'Usuario creado con éxito',
      },
      result: user,
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      message: {
        title: 'Error',
        description: err.message,
      },
      result: {},
    });
  }
};

