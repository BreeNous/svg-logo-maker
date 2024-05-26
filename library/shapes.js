
class Shape {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        throw new Error('This method should be overridden by subclasses');
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150,25 250,175 50,175" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="75" y="25" width="150" height="150" fill="${this.color}" />`;
    }
}


module.exports = Circle, Square, Triangle;