// const mysql = require('mysql');

// let connection = mysql.createConnection({
//   host: '127.0.0.1',
//   port:'3306',
//   user: 'root',
//   password: 'vvv',
//   database: 'webservice'
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('Error de conexión:', err);
//     return;
//   }
//   console.log('Conexión exitosa');

//   let sql = 'SELECT * FROM registro_usuario';

//   connection.query(sql, function(err, result){
//     if(err) throw err;
//     console.log(result);
//     connection.end();
//   });
// });


