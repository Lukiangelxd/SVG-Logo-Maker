class Shape {
    constructor() {
        this.color = '';
    }

    getSVG(color) {
        this.color = color;
        return this.render();
    }
}
class Triangle extends Shape {
    getSVG(color) {
        this.color = color;
        return this.render();
    }

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}
class Circle extends Shape {
    getSVG(color) {
        this.color = color;
        return this.render();
    }

    render() {
        return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
}
class Square extends Shape {
    getSVG(color) {
        this.color = color;
        return this.render();
    }

    render() {
        return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
}

module.exports = { Circle, Square, Triangle };

