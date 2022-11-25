function areaSquare(a) {
    return a * a;
}

function areaRectangle(a, b) {
    return a * b;
}

function areaCircle(r) {
    return Math.PI * r * r;
}

module.exports = {
    areaSquare: areaSquare,
    areaRectangle : areaRectangle,
    areaCircle,
}