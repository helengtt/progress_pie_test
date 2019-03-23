
function blackOrWhite(P, X, Y) {
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
        // if (x > 0 && y = 0) {
        //     cal_degree = 90;
        // }
        // if (x < 0 && y = 0) {
        //     cal_degree = 270;
        // }
        if (cal_degree <= input_degree) {
            return 'black';
        } else {
            return 'white';
        }

    }
}

