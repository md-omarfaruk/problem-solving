function getArea(length, width) {
    let areaLength = parseFloat(length)
    let areaWidth = parseFloat(width)
    let area = areaLength * areaWidth;

    return parseFloat(area);
}

function getPerimeter(length, width) {
    let areaLength = parseFloat(length)
    let areaWidth = parseFloat(width)
    let sum = areaLength + areaWidth;
    let perimeter = 2 * parseFloat(sum);

    return parseFloat(perimeter);
}
console.log(getArea(3, 4.5), getPerimeter(3, 4.5));

