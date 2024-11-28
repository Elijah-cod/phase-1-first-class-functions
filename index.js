function receivesAFunction(callback) {
    const name = "Elijah"
    return callback (name)
}

function returnsANamedFunction () {
    return function namedFunction () {
        console.log("Hey, I'm a returned function. Meaning, I'm a higher function")
    }
}

function returnsAnAnonymousFunction () {
    return () => console.log("Hey, I'm an anonymous function that has been returned")
}