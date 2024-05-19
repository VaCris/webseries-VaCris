const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));


app.use((req, res, next) => {
    if (req.session && req.session.email) {
        res.locals.nombreUsuario = req.session.email;
        next();
    } else {
        res.redirect('/home.html');
    }
});


app.get('/perfil', (req, res) => {
    res.send(`Bienvenido, ${res.locals.nombreUsuario}! Esta es tu página de perfil.`);
});

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
