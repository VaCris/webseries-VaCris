// Arreglar todo los logout %

app.get('/public/pages/Home', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Error al cerrar la sesión:', err);
            res.status(500).send('Error interno del servidor');
        } else {
            res.redirect('../Login');
        }
    });
});
