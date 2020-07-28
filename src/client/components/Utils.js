export function getMousePos(e) {
    return { x: e.clientX, y: e.clientY };
}

export function getAngle(x, y, degreeLimit) {
    let dx,
        dy = 0,
        xD,
        xP,
        yD,
        yP;

    const w = { x: window.innerWidth, y: window.innerHeight };

    if (x <= w.x / 2) {
        xD = w.x / 2 - x;
        xP = (xD / (w.x / 2)) * 100;
        dx = ((degreeLimit * xP) / 100) * -1;
    }

    if (x > w.x / 2) {
        xD = x - w.x / 2;
        xP = (xD / (w.x / 2)) * 100;
        dx = (degreeLimit * xP) / 100;
    }

    if (y <= w.y / 2) {
        yD = w.y / 2 - y;
        yP = (yD / (w.y / 2)) * 100;
        dy = ((degreeLimit * yP) / 100) * -1;
    }

    if (y > w.y / 2) {
        yD = y - w.y / 2;
        yP = (yD / (w.y / 2)) * 100;
        dy = (degreeLimit * yP) / 100;
    }

    //turn degrees to radians!
    return { x: (dx * Math.PI) / 180, y: (dy * Math.PI) / 180 };
}
