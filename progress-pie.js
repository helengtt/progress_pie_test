
blackOrWhite = (P, X, Y) => {
    let r = 50,
        x = X - 50, 
        y = Y - 50, 
        input_degree = 360 * P/100,
        cal_degree = Math.atan(x/y)/(Math.PI/180);

    if ((x*x + y*y) > r*r) {
        return 'white';
    } else {
        // if (x >= 0 && y > 0) {
        //     cal_degree;
        // }
        if (x >= 0 && y < 0) {
            cal_degree = cal_degree + 180;
        }
        if (x < 0 & y < 0) {
            cal_degree = cal_degree + 180;
        }
        if (x < 0 && y > 0 ) {
            cal_degree = cal_degree + 360;
        }
        if (x > 0 && y === 0) {
            cal_degree = 90;
        }
        if (x < 0 && y === 0) {
            cal_degree = 270;
        }
        if (cal_degree <= input_degree) {
            return 'black';
        } else {
            return 'white';
        }

    }
}

let T = 4;
let input_data= [
    [0, 55, 55],
    [12, 55, 55],
    [13, 55, 55],
    [13, 99, 99],
];

test = (testsNum, tests) => {
    let output = [];
    for (let i = 0; i < testsNum; i++) {
        output.push(`Case #${i+1}: ${blackOrWhite(tests[i][0], tests[i][1], tests[i][2])}`);
    }
    return output;
}

console.log(test(T, input_data));

// Test data
// on x, y axis
// blackOrWhite(0, 50, 80);
// blackOrWhite(1, 50, 80);
// blackOrWhite(25, 80, 50);
// blackOrWhite(24, 80, 50);
// blackOrWhite(50, 50, 20);
// blackOrWhite(50, 50, 0);
// blackOrWhite(75, 20, 50);
// blackOrWhite(75, 0, 50);
// (+, +)
// blackOrWhite(0, 55, 55);
// blackOrWhite(12, 55, 55);
// blackOrWhite(13, 55, 55);
// blackOrWhite(13, 99, 99);
// (+, -)
// blackOrWhite(30, 55, 55);
// blackOrWhite(30, 99, 99);
// blackOrWhite(30, 80, 90);
// blackOrWhite(30, 80, 10);
// blackOrWhite(45, 90, 20);
// blackOrWhite(45, 99, 1);
// (-, -)
// blackOrWhite(55, 55, 55);
// blackOrWhite(55, 99, 99);
// blackOrWhite(55, 80, 90);
// blackOrWhite(55, 80, 90);
// blackOrWhite(55, 80, 10);
// blackOrWhite(55, 45, 45);
// blackOrWhite(70, 45, 45);
// blackOrWhite(70, 1, 1);
// blackOrWhite(70, 90, 20);
// blackOrWhite(70, 99, 1);
// (-, +)
// blackOrWhite(87, 55, 55);
// blackOrWhite(87, 99, 1);
// blackOrWhite(87, 45, 55);
// blackOrWhite(99, 99, 99);
// blackOrWhite(87, 20, 40);
