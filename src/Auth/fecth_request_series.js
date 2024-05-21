const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDY3ODEyOTZlNTAwN2M3MzcwOTU0MjYzZDg4ZjFmYSIsInN1YiI6IjY1ZDExODhkYjQyMjQyMDE2M2IxZGUyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.muS5R9thd_2WqhDdHLMvQUgzYOSXVr6-OyAmycHKKAg'
    }
  };
  
  fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));