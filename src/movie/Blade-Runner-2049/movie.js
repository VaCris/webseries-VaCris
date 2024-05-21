// movie.js

document.addEventListener('DOMContentLoaded', function() {
    loadMovieDetails();
});

function loadMovieDetails() {
    const movieDetails = {
        titulo: "Blade Runner 2049",
        director: "Denis Villeneuve",
        fecha: "Octubre 6, 2017",
        genero: "Acción, Ciencia Ficción",
        sipnosis: "En un futuro distópico, un blade runner busca replicantes rebeldes, desencadenando secretos que desafían la realidad."
    };

    displayMovieDetails(movieDetails);
}

function displayMovieDetails(movie) {
    document.getElementById('movie-details').innerHTML = `
        <h2>Details</h2>
        <h2>Titulo: ${movie.titulo}</h3>
        <p>Director: ${movie.director}</p>
        <p>Release Date: ${movie.releaseDate}</p>
        <p>Genre: ${movie.genre}</p>
        <p>Summary: ${movie.summary}</p>
    `;
}
