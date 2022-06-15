const { createServer } = require("http");

/* const peticionesPost = require("/peticiones/POST/index");  */

const httpServer =  createServer((req, res) => {
    const peticiones = require("/peticiones/Get/index");
console.log(req.method);

  switch (req.method) {
    case 'GET':
        peticiones.peticionesGet(req, res);
      break;
      case 'POST':
   /*      peticionesPost(req, res) */
      break;
      case 'OPTIONS':
   res.write(200);
       res.end();
      break;
    default:
      break;
  }

});

httpServer.listen(process.env.PORT || 3001, ()=>{console.log('.......')});