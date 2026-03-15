// Playlist Manager
// Demonstrates common array operations by managing a music playlist.
// Uses push(), pop(), unshift(), shift(), includes(), indexOf(), and reverse().

const playlist = ['Blinding Lights', 'Believer', 'Perfect'];

console.log("Initial playlist:", playlist);

// Add a song to the end
playlist.push('Counting Stars');
console.log("Song added to end:", playlist);

// Remove last song
playlist.pop();
console.log("Last song removed:", playlist);

// Add a song to the beginning
playlist.unshift('Shape of You');
console.log("Song added to beginning:", playlist);

// Remove first song
playlist.shift();
console.log("First song removed:", playlist);

// Check if a song exists
if (playlist.includes('Believer')) {
    console.log("'Believer' exists in the playlist.");
} else {
    console.log("'Believer' not found in playlist.");
}

// Find position of a song
const index = playlist.indexOf('Perfect');
console.log("The song 'Perfect' is at position:", index);

// Reverse playlist
playlist.reverse();
console.log("Reversed playlist:", playlist);