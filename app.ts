function AreaofCircle(radius: number): number {
    let area = Math.PI* radius * radius;
    return area;
}

// Example usage:
let radius = 232;
let circleArea = AreaofCircle(radius);
console.log("When the radius of Circle is",radius, "then area is", circleArea);

