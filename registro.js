const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'webseries'
});

app.post('/Principal', async (req, res) => {
    const { username, email, password } = req.body;

    if (!validarCorreo(email)) {
        return res.send("El correo electrónico proporcionado no es válido.");
    }

    const [rows] = await connection.query('SELECT COUNT(*) as count FROM registro_usuario WHERE email = ?', [email]);
    if (rows[0].count > 0) {
        return res.send("El correo electrónico ya está registrado.");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await connection.query('INSERT INTO registro_usuario (nombre, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword]);

    if (result.affectedRows > 0) {
        res.send("Registro completado.");
    } else {
        res.send("Error al registrar el usuario.");
    }
});

function validarCorreo(correo) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(correo).toLowerCase());
}

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
