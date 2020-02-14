randomitem = (thing) => {
    if (!thing) {
        return "invalid";
    }
    else {
        return `What is ${thing}?`;
    }
}

console.log(randomitem("hi"));