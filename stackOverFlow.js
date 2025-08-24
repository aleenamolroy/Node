// function causeStackOverflow() {
//   causeStackOverflow();
//  }
// causeStackOverflow();

let count = 0;

function recurse() {
    count++;
    console.log("Recursion count:", count);
    recurse();
}

recurse();
