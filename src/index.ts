const consoleStart = () => {
    console.log('\x1b[33m', 'Running test cases...');
    console.log('');
};

const consoleEnd = () => {
    console.log('\x1b[37m', '');
    console.log('');
};

const consoleBuffer = () => {
    console.log('--------------------------');
    console.log('--------------------------');
    console.log('\n');
};

const formatOutput = (fxn: any, answer: any) => {
    const output = fxn;

    console.log('\x1b[36m%s\x1b[0m', 'Testing function...');

    if (output === answer) {
        console.log('\x1b[32m', 'CORRECT :: ' + output + ' === ' + answer);
    } else {
        console.log('\x1b[31m', 'WRONG :: ' + output + ' === ' + answer);
    }

    console.log();
};

function jumpingOnClouds(array: number[]) {
    // Write your code here

    let totalJumps = -1;
    for (let i = 0; i < array.length; i += 1) {
        totalJumps++;

        if (i + 2 < array.length && array[i + 2] !== 1) {
            i++;
        }
    }

    return totalJumps;
}

consoleStart();

formatOutput(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]), 4);
formatOutput(jumpingOnClouds([0, 0, 0, 0, 1, 0]), 3);

formatOutput(
    jumpingOnClouds([
        0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1,
        0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1,
        0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0,
        1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0,
        1, 0, 0, 0,
    ]),
    53
);

formatOutput(
    jumpingOnClouds([
        0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1,
        0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1,
        0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0,
    ]),
    46
);

formatOutput(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]), 5);

consoleEnd();

consoleBuffer();

export {};
