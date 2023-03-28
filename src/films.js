// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(film => film.director)
  console.log("EXERCISE 1 ->", result);
  return result;
}
// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const movDirector = array.filter(film => film.director === director);
  console.log('EXERCISE 2: ', movDirector);
  return movDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const dirFilms = array.filter(film => film.director === director);
  let averageScore = moviesAverage(dirFilms);
  console.log('EXERCISE 3: ', averageScore);
  return averageScore;
}

// function to calculate the average score of the chosen films
function moviesAverage(array) {
  const scoresFilms = array.map(film => film.score);
  const avgMovies = (scoresFilms.reduce((counter,item) => counter + item,0)/scoresFilms.length);
  return avgMovies;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const titles = array.map(film => film.title);
  const orderedFilms = titles.sort();
  console.log(orderedFilms);
  if (orderedFilms.length > 20) {
    orderedFilms.length = 20
  };
  console.log('EXERCISE 4: ', orderedFilms);
  return orderedFilms;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const filmsAr = array.map (films => films);
  const sortedYears= filmsAr.sort((a, b) => (a.year > b.year ? 1 : -1));
  console.log('EXERCISE 5: ', sortedYears);
  return sortedYears;
}


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {

  const genresFilms = array.filter(film => film.genre == genre);
  // !== '' is used to calculate the films without a score
  const scoresFilms =  genresFilms.filter(film => film.score !== '');
  const avgCategory = moviesAverage(scoresFilms);
  console.log('EXERCISE 6: ', avgCategory);
  return Number(avgCategory.toFixed(2));
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
 
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
