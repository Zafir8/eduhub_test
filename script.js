// A simple JavaScript script

// Function to generate a random number between min and max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to shuffle an array
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Example usage
console.log("Random number between 1 and 100:", getRandomNumber(1, 100));
console.log("Shuffled array:", shuffleArray([1, 2, 3, 4, 5]));