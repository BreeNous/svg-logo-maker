// packages needed
const inquirer = require('inquirer');
const SVG = require('./svg');
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require('fs/promises');

//User prompt array class
class CLI {
    run() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'Provide one to three chatacters of what you would like to be displaed as your logos text.',
                    name: 'logoText',
                },
                {
                    type: 'input',
                    message: 'What color would you like this text to be? Enter the color name or a hex number.',
                    name: 'textColor',
                },
                {
                    type: 'list',
                    message: 'What shape would you like your logo to be?',
                    name: 'logoShape',
                    choices: ['Circle', 'Triangle', 'Square']
                },
                {
                    type: 'input',
                    message: 'What color would you like your shape to be? Enter the color name or a hex number.',
                    name: 'logoColor',
                },
                
            ])
            .then(({ logoText, textColor, logoShape, logoColor }) => {
                let shape;
                switch (logoShape) {
                    case 'circle':
                        shape = new Circle();
                        break;

                    case 'square':
                        shape = new Square();
                        break;

                    default:
                        shape = new Triangle();
                        break;
                }

                shape.setColor(logoColor);

                const svg = new SVG();
                svg.setText(logoText, textColor);
                svg.setShape(shape);
                return writeFile('logo.svg', svg.render());
            })
            .then(() => {
                console.log('Generated logo.svg');
            }) 
            .catch((error) => {
                console.log(error);
                console.log('Something went wrong.');
            })

    }
}

module.exports = CLI;
