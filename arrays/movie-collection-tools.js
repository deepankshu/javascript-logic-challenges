// Movie Collection Tools
// Demonstrates combining arrays and searching elements using concat(),
// includes(), and indexOf().

const moviesAnime = ['Your Name', 'Weathering with you', 'One Piece'];
const moviesHorror = ['Conjuring', 'Annabelle', 'The Ring'];

// Combine both movie lists
const combinedList = moviesAnime.concat(moviesHorror);
console.log("Combined movie list:", combinedList);

// Check if a movie exists
if (combinedList.includes('Your Name')) {
    console.log("Yay! We found the movie.");
} else {
    console.log("Oops! That movie doesn't exist.");
}

// Find the position of a movie
console.log("Index of Annabelle:", combinedList.indexOf('Annabelle'));