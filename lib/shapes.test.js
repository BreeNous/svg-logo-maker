//Requires the shapes.js file exports so the classes can be imported. 
const { Circle, Square, Triangle } = require('./shapes');

describe('Shape classes', () => {

    //Tests that when a color is plugged in from the prompt, that the circle shape can obtain that value and
    //will render out with the predifined sizing values for the square class from shapes.js
    test('Circle render method', () => {
        const circle = new Circle();
        circle.setColor('red');
        expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="red"/>');
    });

    //Tests that when a color is plugged in from the prompt, that the triangle shape can obtain that value and
    //will render out with the predifined sizing values for the triangle class from shapes.js
    test('Triangle render method', () => {
        const triangle = new Triangle();
        triangle.setColor('blue');
        expect(triangle.render()).toBe('<polygon points="150,10 250,150 50,150" fill="blue" />');
    });

    //Tests that when a color is plugged in from the prompt, that the square shape can obtain that value and
    //will render out with the predifined sizing values for the square class from shapes.js
    test('Square render method', () => {
        const square = new Square();
        square.setColor('green');
        expect(square.render()).toBe('<rect x="75" y="25" width="150" height="150" fill="green" />');
    });
});
