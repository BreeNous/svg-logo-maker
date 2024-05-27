//Requires the shapes.js file exports and the svg.js file exports so the classes can be imported. 
const { Circle, Square, Triangle } = require('./shapes');
const SVG = require('./svg');

//Points to the svg class that has the shape subclasses for testing.
describe('SVG class', () => {

    //Tests that the prompt response value for text is being plugged in correctly to the svg class.
    test('should set text and textColor correctly', () => {
        const svg = new SVG();
        svg.setText('ABC', 'pink');
        expect(svg.text).toBe('ABC');
        expect(svg.textColor).toBe('pink');
    });

    //Tests that when a circle is chosen, the new circle class is being plugged in correctly to the svg class.
    test('should set shape correctly', () => {
        const svg = new SVG();
        const circle = new Circle();
        svg.setShape(circle);
        expect(svg.shape).toBe(circle);
    });

    //Tests that when circle is chosen, that the values for text, text color and shape color are being plugged
    //in correctly to the svg class so that the response string is a match to what is expected from the
    //predfined values in the shapes.js and the svg.js.
    test('should render correct SVG string with Circle', () => {
        const svg = new SVG();
        const circle = new Circle();
        circle.setColor('purple');
        svg.setShape(circle);
        svg.setText('ABC', 'pink');
        expect(svg.render().trim()).toBe(
            `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="100" r="80" fill="purple"/>
                <text x="150" y="115" font-size="50" text-anchor="middle" fill="pink">ABC</text>
            </svg>`.trim()
        );
    });

    //This tests the same as above, but concerning a triangle shape class.
    test('should render correct SVG string with Triangle', () => {
        const svg = new SVG();
        const triangle = new Triangle();
        triangle.setColor('blue');
        svg.setShape(triangle);
        svg.setText('ABC', 'pink');
        expect(svg.render().trim()).toBe(
            `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <polygon points="150,10 250,150 50,150" fill="blue" />
                <text x="150" y="115" font-size="50" text-anchor="middle" fill="pink">ABC</text>
            </svg>`.trim()
        );
    });

    //This tests the same as above, but concerning a square shape class.
    test('should render correct SVG string with Square', () => {
        const svg = new SVG();
        const square = new Square();
        square.setColor('green');
        svg.setShape(square);
        svg.setText('ABC', 'pink');
        expect(svg.render().trim()).toBe(
            `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect x="75" y="25" width="150" height="150" fill="green" />
                <text x="150" y="115" font-size="50" text-anchor="middle" fill="pink">ABC</text>
            </svg>`.trim()
        );
    });
});
