"use strict";
exports.__esModule = true;
var consoleBuffer = function () {
    console.log('--------------------------');
    console.log('--------------------------');
    console.log('\n');
};
var dragon = { color: 'red', temperment: 'spicy', mass: 100 };
function jumpingOnClouds(array) {
    // Write your code here
    var totalJumps = 0;
    for (var i = 0; i < array.length; i += 1) {
        if (array[i] === 0) {
            totalJumps++;
        }
        else {
            if (i + 1 <= array.length && array[i + 1] === 0) {
                //totalJumps++;
                i++;
            }
        }
    }
    return totalJumps;
}
consoleBuffer();
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));
console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0]));
consoleBuffer();
