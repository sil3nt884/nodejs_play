
module.exports  = class Box {

    constructor (w, l, h, g) {
        this.width = w;
        this.length = l;
        this.height = h;
        this.grade = g;
        this.TSA = 0;
        this.price  =0
    };

    getWidth() {
        return this.width;
    }

    getLength() {
        return this.length;
    }
    getHeight() {
        return this.height;
    }

    getPrice() {
        return Math.round(((this.price * 100) / 100.0));
    }
    setPrice(p) {
        this.price = p;
    }
    getTotalSurfaceArea() {
        return this.TSA = 2 * ((this.width * this.length) + (this.width * this.height) + (this.height * this.length));;
    }

};



