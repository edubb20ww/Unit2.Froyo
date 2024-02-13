const userInputString = prompt(
    "What flavor(s) would you like?",
    "vanilla, strawberry, or coffee"
  );

const stringArray = userInputString.split(",")

function logValues(obj) {
    for (const values in obj) {
        console.log(obj[values]);
    }
}

logValues(stringArray);