let a = 10;
let arr = [1, 2, 3, 4];

function saySomething() {
    return "Something";
}

export { a as myNumber, arr, saySomething }

export default function () {
    return "default export";
}
