const fs = require('fs');
const lodash = require('lodash');

const readMoviesUtil = (res, rej) => {
  fs.readFile('api/movies.json', (err, data) => {
    if (err) {
      throw rej(err);
    }
    return res(JSON.parse(data));
  });
};

const writeMoviesUtil = (updatedMovies, callback) => {
  const moviesToJson = JSON.stringify({ movies: updatedMovies }, null, 2);

  fs.writeFile('api/movies.json', moviesToJson, (err) => {
    if (err) {
      throw err;
    }

    callback();
  });
};

module.exports = function(server) {
  server.get('/movies/:name', async (req, res) => {
    const readMovies = new Promise((resolve, reject) => readMoviesUtil(resolve, reject));

    readMovies
      .then(moviesResponse => {
        res.send(moviesResponse.movies.find(movie => lodash.kebabCase(movie.name) === req.params.name))
      })
      .catch(err => console.log(err));
  });

  server.get('/movies', async (req, res) => {
    const readMovies = new Promise((resolve, reject) => readMoviesUtil(resolve, reject));

    readMovies
      .then(moviesResponse => {
        res.send(moviesResponse.movies)
      })
      .catch(err => console.log(err));
  });

  server.post('/movies', async (req, res) => {
    const readMovies = new Promise((resolve, reject) => readMoviesUtil(resolve, reject));

    readMovies
      .then(moviesResponse => {
        if (req.body) {
          const moviesCopy = [...moviesResponse.movies];
          moviesCopy.push(JSON.parse(req.body));

          writeMoviesUtil(moviesCopy, res.send(moviesCopy));
        }
      })
      .catch(err => console.log(err));
  });

  server.delete('/movies', async (req, res) => {
    const readMovies = new Promise((resolve, reject) => readMoviesUtil(resolve, reject));

    readMovies
      .then(moviesResponse => {
        if (req.body) {
          const moviesCopy = [...moviesResponse.movies];
          const movieToDelete = JSON.parse(req.body);
          const updatedMovies = moviesCopy.filter(el => movieToDelete.id !== el.id);

          writeMoviesUtil(updatedMovies, res.send(updatedMovies));
        }
      })
      .catch(err => console.log(err));
  });
};
