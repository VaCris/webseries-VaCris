const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjBkMDBiOWE2NzljMTI5ZGE3MWI3ZmQ1MjRhYmExMSIsInN1YiI6IjY1ZDExODhkYjQyMjQyMDE2M2IxZGUyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZR6ST7DemD_JdTYP3nq3beoan_YG3dNvmPglp9e7XuM'
    }
  };
  
  fetch('https://api.themoviedb.org/3/authentication', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

    const options2 = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '5612a00a75msh1538d174c510c77p1b5e77jsn17c6ffc1bda0',
        'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
      }
    };
    
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }    
    