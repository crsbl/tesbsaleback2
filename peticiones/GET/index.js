
exports.productosDatos = (res, connectionr) => {
    connectionr.getConnection(function (err, connection) {
      if (err) throw err; // not connected!
  
      // Use the connection
      connection.query(
        `SELECT * FROM product  `,
        function (error, results, fields) {
          res.writeHead(200, {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          });
          res.write(JSON.stringify([results.slice(0,8),results.length]));
          res.end();
          // When done with the connection, release it.
          connection.release();
  
          // Handle error after the release.
          if (error) throw error;
  
          // Don't use the connection here, it has been returned to the pool.
        }
      );
    });
  };