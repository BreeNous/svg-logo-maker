//Creates a class for shape, that basically acts as a model that the actual shape (Circle, Square, Triangle)
//values can be plugged into.
class Shape {
    constructor() {
        this.color = '';
    };

    setColor(color) {
        this.color = color;
    };
}
//Creates the circle shape class that has a vaule that will be reused for each circle being the sizing values and that it has a fill.
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`;
    };
};
//Creates the triangle shape class that has a vaule that will be reused for each triangle being the sizing values and that it has a fill.
class Triangle extends Shape {
    render() {
        return `<polygon points="150,10 250,150 50,150" fill="${this.color}" />`;
    };
};
//Creates the square shape class that has a vaule that will be reused for each square being the sizing values and that it has a fill.
class Square extends Shape {
    render() {
        return `<rect x="75" y="25" width="150" height="150" fill="${this.color}" />`;
    };
};

//Exports the Circle, Square, and Traingle class to be imported and used in other files.
module.exports = { Circle, Square, Triangle };