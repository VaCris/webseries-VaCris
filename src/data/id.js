const fs = require('fs');

const filePath = './movies.json'; 
const movies = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

let maxId = Math.max(...movies.map(movie => movie.id || 0));

movies.forEach(movie => {
    if (!movie.id) {
        maxId += 1;
        movie.id = maxId;
    }
});


fs.writeFileSync(filePath, JSON.stringify(movies, null, 2), 'utf-8');

console.log('ya tienen id');
