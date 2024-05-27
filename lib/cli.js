// These are the packages needed and files needed.
const inquirer = require('inquirer');
const SVG = require('./svg');
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require('fs/promises');

//Class for user prompt questions array that will return the responses.
class CLI {
    run() {
        return inquirer
        //Ask user for shape, color, text and text color for their logo.
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
            //Then get all the values from the prompt response and handle what to do for each possible option for shape.
            .then(({ logoText, textColor, logoShape, logoColor }) => {
                let shape;
                switch (logoShape) {
                    case 'Circle':
                        shape = new Circle();
                        break;

                    case 'Square':
                        shape = new Square();
                        break;

                    case 'Triangle':
                        shape = new Triangle();
                        break;

                    default:
                        throw new Error('Invalid shape type.')
                }
                //Take shape color value and set it to the specidied shape
                shape.setColor(logoColor);
                //Create a new instance of the SVG class and set the remaining values to the text and the text's color
                //then get the new shape instance from above and plug that into the SVG class as well.
                const svg = new SVG();
                svg.setText(logoText, textColor);
                svg.setShape(shape);
                //Creates the svg file containing the logo.
                return writeFile('logo.svg', svg.render());
            })
            //If all goes well during this process then this will be logged to the console as conformation
            .then(() => {
                console.log('Generated logo.svg');
            }) 
            //If all doesnt go well then this will be logged to let you know there was an issue.
            .catch((error) => {
                console.log(error);
                console.log('Something went wrong.');
            })

    }
}
//Exports the CLI class to be imported and used in other files.
module.exports = CLI;
