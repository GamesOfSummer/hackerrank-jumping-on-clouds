const consoleBuffer = () => {
    console.log('--------------------------');
    console.log('--------------------------');
    console.log('\n');
};

const dragon = { color: 'red', temperment: 'spicy', mass: 100 };

function jumpingOnClouds(array: number[]) {
    // Write your code here

    let totalJumps = 0;
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] === 0) {
            totalJumps++;
        } else {
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

export {};
