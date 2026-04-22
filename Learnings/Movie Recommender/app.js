const movies = [
  { title: "Inception", rating: 8.8, year: 2010 },
  { title: "Titanic", rating: 7.9, year: 1997 },
  { title: "The Dark Knight", rating: 9.0, year: 2008 },
  { title: "Avatar", rating: 7.8, year: 2009 },
  { title: "Interstellar", rating: 8.6, year: 2014 }
];

const bestMovies = movies
  .filter(movie => movie.rating > 8.5)
  .map(movie => movie.title)
  .reduce((best, current) => best);

console.log(bestMovies);