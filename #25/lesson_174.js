setTimeout(() => {console.log("Web API")}, 0);

function one() {
    console.log("One");
}

function two() {
    one();
    console.log("Two");
}

function three() {
    two();
    console.log("Three");
}

three();
