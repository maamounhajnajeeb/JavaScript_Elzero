let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
mix.shift();

for (i=start; i<mix.length; i++) {
    if (typeof mix[i] === "number"){
        console.log(mix[i]);
    }
}
