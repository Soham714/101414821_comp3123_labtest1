// function to resolve promise
function resolvedPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ message: 'delayed success!' });
        }, 500);
    });
}

// function to reject promise
function rejectedPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('error: delayed exception!'));
        }, 500);
    });
}

// Call both promises and handle the results

// calling the resolve promise function
resolvedPromise()
    .then(result => console.log(result)) // Output: { message: 'delayed success!' }
    .catch(error => console.error(error)); 

// calling the reject promise function
rejectedPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error)); // Output Error: error: delayed exception!
