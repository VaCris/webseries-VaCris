const express = require('express');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

(async () => {
    connection = await mysql.createConnection({
        host: 'localhost',
        port: '3307', 
        user: 'root',
        password: 'admin',
        database: 'webservice'
    });
})();

app.post('', async (req, res) => {
    const { username, email, password } = req.body;

    if (!validarCorreo(email)) {
        return res.send("El correo electrónico proporcionado no es válido.");
    }

    try {
        const [rows] = await connection.query('SELECT COUNT(*) as count FROM registro_usuario WHERE email = ?', [email]);
        if (rows[0].count > 0) {
            return res.send("El correo electrónico ya está registrado.");
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const [result] = await connection.query('INSERT INTO registro_usuario (usuario, email, password, salt) VALUES (?, ?, ?, ?)', [username, email, hashedPassword, salt]);

        if (result.affectedRows > 0) {
            res.send("Registro completado.");
        } else {
            res.send("Error al registrar el usuario.");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error del servidor.");
    }
});

function validarCorreo(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
