const  Box = require("./Box");
var GC1= 0.45;
var  GC2 = 0.59;
var  GC3 =  0.68;
module.exports = class Boxtype1 extends Box{

    constructor( w,  l,  h,  grade){
        super(w, l, h, grade);
        console.log(this.getPrice())
    }

    getCost (grade){

        switch(grade){
            case 1:
                this.setPrice(GC1 *  this.getTotalSurfaceArea());
                break;
            case 2 :
                this.setPrice(GC2 * this.getTotalSurfaceArea());
                break;
            case 3:
                this.setPrice(GC3 * this.getTotalSurfaceArea())
        }
    }

};