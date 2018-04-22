var TSA = 0;
var grade =9
var height =0
var width = 0
var price = 0;
var length =0

module.exports  = class Box {

    constructor (w, l, h, g) {
        width = w;
        length = l;
        height = h;
        grade = g;
    };

    getWidth() {
        return width;
    }

    getLength() {
        return length;
    }
    getHeight() {
        return height;
    }

    getPrice() {
        return Math.round(((price * 100) / 100.0));
    }
    setPrice(p) {
        price = p;
    }
    getTotalSurfaceArea() {
        return TSA = 2 * ((width * length) + (width * height) + (height * length));;
    }

};



