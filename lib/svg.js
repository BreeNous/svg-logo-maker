class SVG {

    constructor() {
        this.shape = null;
        this.text = '';
        this.textColor = '';
    }
    
    setText(text, color) {
        this.text = text;
        this.textColor = color;
    }

    setShape(shape) {
        this.shape = shape;
    }

    render() {
        return `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                ${this.shape.render()}
                <text x="150" y="115" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>
        `;
    }
}

module.exports = SVG;