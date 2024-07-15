function pointsValidation(input) {
    let x1 = input[0];
    let x2 = input[2];
    let y1 = input[1];
    let y2 = input[3];
    let symbol = " "
    function distanceX1Y1(x1, y1) {
        if (Math.trunc(Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2))) === Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2))) {
            return `{${x1}, ${y1}} to {0, 0} is valid`;
        } else {
            return `{${x1}, ${y1}} to {0, 0} is invalid`;
        }
    }
    function distanceX2Y2(x2, y2) {
        if (Math.trunc(Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2))) === Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2))) {
            return `{${x2}, ${y2}} to {0, 0} is valid`;
        } else {
            return `{${x2}, ${y2}} to {0, 0} is invalid`;
        }
    }
    function distanceX1Y2ToX2Y2(x1, y1, x2, y2) {
        if (Math.trunc(Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))) === Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))) {
            return `{${x1}, ${ y1}} to {${x2},${symbol}${y2}} is valid`;
        } else {
            return `{${x1}, ${ y1}} to {${x2},${symbol}${y2}} is invalid`;
        }
    }
    console.log(distanceX1Y1(x1, y1));
    console.log(distanceX2Y2(x2, y2));
    console.log(distanceX1Y2ToX2Y2(x1, y1, x2, y2));
}


pointsValidation([3, 0, 0, 4]);
//pointsValidation([2, 1, 1, 1]);
