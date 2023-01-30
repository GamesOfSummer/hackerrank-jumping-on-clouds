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
        if (
            (i + 1 <= array.length && array[i + 1] !== 1) ||
            (i + 2 <= array.length && array[i + 2] !== 1)
        ) {
            totalJumps++;
            i++;
        }
    }

    return totalJumps;
}

consoleBuffer();

// 4
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));

// 3
console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0]));

// 46
console.log(
    jumpingOnClouds([
        0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1,
        0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1,
        0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0,
    ])
);

consoleBuffer();

export {};
