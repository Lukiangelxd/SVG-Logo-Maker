const { Triangle, Circle, Square } = require('./shape.js');
const { getSVGColor } = require('./shapeColors.js');

describe('Shape Tests', () => {
    test('getSVG function should return valid SVG', () => {
        const triangle = new Triangle();
        const circle = new Circle();
        const square = new Square();

        expect(triangle.getSVG(getSVGColor('blue'))).toContain('<polygon');
        expect(circle.getSVG(getSVGColor('green'))).toContain('<circle');
        expect(square.getSVG(getSVGColor('red'))).toContain('<rect');
    });
});