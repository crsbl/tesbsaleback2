exports.peticionesGet = (req, res) => {
  switch (req.url) {
    case "/productosDatos":
     console.log('productosDatos...');
      break;

    case "/filtroDatos":
        console.log('filtroDatos...');
      break;

    default:
      break;
  }
};
