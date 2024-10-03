function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        // Check if input is an array
        if (!Array.isArray(mixedArray)) {
            reject('Input must be an array');
            return;
        }

        // Filter out non-strings and lowercase the remaining words
        const filteredArray = mixedArray
            .filter(item => typeof item === 'string')  // Keep only strings
            .map(word => word.toLowerCase());          // Convert strings to lowercase

        resolve(filteredArray);  // Resolve the promise with the filtered array
    });
}

// Example usage
const mixedArray = ['PIZZA', 10, true, 25, false, 'WINGS'];

lowerCaseWords(mixedArray)
    .then(result => console.log(result)) 
    .catch(error => console.error(error));
    
 // Output: [ 'pizza', 'wings' ]