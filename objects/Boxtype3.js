const  Box = require("./Box");
var GC2= 0.59;
var GC3 = 0.68;
var GC4 =  0.92;
var colour = false;
var GC5 = 1.30;



module.exports  = class Boxtype3 extends Box{
    constructor( w,  l,  h,  grade){
        super(w, l, h, grade);
    }

    getCost = function (grade){
        var total = 0;
        switch(grade){
            case 2:
                this.setPrice(GC2 *  this.getTotalSurfaceArea());
                if(colour){
                    total = this.getPrice() * 0.15;
                    this.setPrice(total);
                }
                break;
            case 3 :
                this.setPrice(GC3 * this.getTotalSurfaceArea());
                if(colour){
                   total = this.getPrice() * 0.15;
                    this.setPrice(total);
                }
                break;
            case 4:
                this.setPrice(GC4 * this.getTotalSurfaceArea())
                if(colour){
                    total = this.getPrice() * 0.15;
                    this.setPrice(total);
                }
                break;
            case 5:
                this.setPrice(GC5 * this.getTotalSurfaceArea())
                if(colour){
                    total = this.getPrice() * 0.15;
                    this.setPrice(total);
                }
                break;
        }
    }

    setColour(b){
        colour = b;
    }

};