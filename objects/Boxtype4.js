const  Box = require("./Box");

var GC2= 0.59;
var GC3 = 0.68;
var GC4 =  0.92;
var colour = false;
var bottom = false;
var GC5 = 1.30;


module.exports  = class Boxtype4 extends Box{


    constructor( w,  l,  h,  grade){

        super(w, l, h, grade);
    }

    getCost = function (grade){
        var total = 0;
        var total2 = 0;
        switch(grade){
            case 2:
                this.setPrice(GC2 *  this.getTotalSurfaceArea());
                if(this.colour && this.bottom){
                    total = this.getPrice() * 0.15;
                    total2 = this.getPrice() * 0.10;
                    this.setPrice(total+total2);
                }
                break;
            case 3 :
                this.setPrice(GC3 * this.getTotalSurfaceArea());
                if(this.colour && this.bottom){
                    total = this.getPrice() * 0.15;
                    total2 = this.getPrice() * 0.10;
                    this.setPrice(total+total2);
                }
                break;
            case 4:
                this.setPrice(GC4 * this.getTotalSurfaceArea())
                if(this.colour && this.bottom){
                    total = this.getPrice() * 0.15;
                    total2 = this.getPrice() * 0.10;
                    this.setPrice(total+total2);
                }
                break;
            case 5:
                this.setPrice(GC5 * this.getTotalSurfaceArea())
                if(this.colour && this.bottom){
                    total = this.getPrice() * 0.15;
                    total2 = this.getPrice() * 0.10;
                    this.setPrice(total+total2);
                }
                break;
        }
    }

    setColour(b){
        colour = b;
    }

    setBottom(b){
        bottom = b;
    }

};