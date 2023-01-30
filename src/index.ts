const consoleBuffer = () => {
    console.log('--------------------------');
    console.log('--------------------------');
    console.log('\n');
};

const dragon = { color: 'red', temperment: 'spicy', mass: 100 };

function jumpingOnClouds(array: number[]) {
    // Write your code here

    let totalJumps = -1;
    for (let i = 0; i < array.length; i += 1) {
        totalJumps++;

        if (i + 2 < array.length && array[i + 2] !== 1) {
            //i++;
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

//53
console.log(
    jumpingOnClouds([
        0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1,
        0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1,
        0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0,
        1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0,
        1, 0, 0, 0,
    ])
);

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
