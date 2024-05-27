const { Shape, Circle, Square, Triangle } = require('./shapes');

describe('Shape classes', () => {

    test('Circle render method', () => {
        const circle = new Circle();
        circle.setColor('red');
        expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="red"/>');
    });

    test('Triangle render method', () => {
        const triangle = new Triangle();
        triangle.setColor('blue');
        expect(triangle.render()).toBe('<polygon points="150,10 250,150 50,150" fill="blue" />');
    });

    test('Square render method', () => {
        const square = new Square();
        square.setColor('green');
        expect(square.render()).toBe('<rect x="75" y="25" width="150" height="150" fill="green" />');
    });
});
