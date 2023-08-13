//code to test original code using jest framework

const { Triangle, Circle, Square } = require('./shape.js');
const { getSVG } = require('./shapeColors.js');

describe('Shape Tests', () => {
    test('getSVG function of Triangle should return valid SVG', () => {
        const triangle = new Triangle();
        const svg = triangle.getSVG(getSVG('blue'));

        expect(svg).toContain('<polygon');
        expect(svg).toContain('fill="#0000ff"');
    });

    test('getSVG function of Circle should return valid SVG', () => {
        const circle = new Circle();
        const svg = circle.getSVG(getSVG('green'));

        expect(svg).toContain('<circle');
        expect(svg).toContain('fill="#008000"');
    });

    test('getSVG function of Square should return valid SVG', () => {
        const square = new Square();
        const svg = square.getSVG(getSVG('red'));

        expect(svg).toContain('<rect');
        expect(svg).toContain('fill="#ff0000"');
    });
});
