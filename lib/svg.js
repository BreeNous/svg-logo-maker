//Creates the reusabel class SVG that handles what to do for each instance an svg needs to be rendered.
class SVG {
    //This creates a base template for what is required to be within the svg without having any assigned values to start.
    constructor() {
        this.shape = null;
        this.text = '';
        this.textColor = '';
    }
    //Since the color and shape are handles in the shapes.js file, we need to handle the text and text color here.
    setText(text, color) {
        this.text = text;
        this.textColor = color;
    }
    //Take in the handled shape from shapes.js to set the shape.
    setShape(shape) {
        this.shape = shape;
    }
    //Creates a template for how big the svg should be as well as the sizing for the text and 
    //text color that being plugged in and includes the namespace decloration so it can berenedered 
    //properly while being understood by all browsers. Renders the shape within rendering the svg since
    //the shape and shape color have already been defined.
    render() {
        return `
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                ${this.shape.render()}
                <text x="150" y="115" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>
        `;
    }
}
//Exports the SVG class to be imported used in other files.
module.exports = SVG;