const express = require('express');
const mysql = require('mysql2/promise');
const session = require('express-session');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'webservice'
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const [results] = await connection.query('SELECT * FROM registro_usuario WHERE email = ?', [email]);

        if (results.length > 0) {
            const user = results[0];

            const match = await bcrypt.compare(password, user.password);
            if (match) {
                req.session.username = user.nombre;
                req.session.email = user.email;
                res.redirect('/Home.html');
            } else {
                res.send('Contraseña incorrecta.');
            }
        } else {
            res.send('Usuario no encontrado.');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error del servidor.');
    }
});

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
