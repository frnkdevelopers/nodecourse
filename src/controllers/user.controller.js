const { StatusCodes } = require('http-status-codes');

exports.findAllUsers = async (req, res) => {
  try {
    // Envía una respuesta al cliente con un objeto que contiene algunos de los valores obtenidos anteriormente
    res.status(StatusCodes.OK).json({
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
