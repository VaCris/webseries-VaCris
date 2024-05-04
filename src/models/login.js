const express = require('express');
const mysql = require('mysql');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();


app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'webseries'
});
app.post('/login.js', (req, res) => {
    const { email, password } = req.body;
    connection.query('SELECT * FROM registro_usuario WHERE email = ?', [email], (error, results, fields) => {
        if (error) throw error;
        if (results.length > 0) {
            const user = results[0];
            const hashedPassword = require('crypto').createHash('sha256').update(user.salt + password).digest('hex');
            if (hashedPassword === user.password) {
                req.session.username = user.nombre;
                req.session.email = user.email;
                res.redirect('/Principal/Home.html');
            } else {
                res.send('Contraseña incorrecta.');
            }
        } else {
            res.send('Usuario no encontrado.');
        }
    });
});
app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});


