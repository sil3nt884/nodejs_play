const  Box = require("./Box");
var GC3 = 0.68;
var GC4 =  0.92;
var colour = false;
var bottom = false;
var top = false;
var GC5 = 1.30;

module.exports  = class Boxtype5 extends Box{

    constructor( w,  l,  h,  grade){
        super(w, l, h, grade);
    }

    getCost = function (grade){
        var total = 0;
        var total2 = 0;
        var total3 = 0;
        switch(grade){
            case 3 :
                this.setPrice(GC3 * this.getTotalSurfaceArea());
                if(colour && bottom && top){
                    total = this.getPrice() * 0.15;
                    total2 = this.getPrice() * 0.10;
                    total3 = this.getPrice() * 0.07;
                    this.setPrice(total+total2 + total3);
                }
                break;
            case 4:
                this.setPrice(GC4 * this.getTotalSurfaceArea())

                if(colour && bottom && top){
                    total = this.getPrice() * 0.15;
                    total2 = this.getPrice() * 0.10;
                    total3 = this.getPrice() * 0.07;
                    this.setPrice(total+total2 + total3);
                }
                break;
            case 5:
                this.setPrice(GC5 * getTotalSurfaceArea())
                if(colour && bottom && top){
                    total = this.getPrice() * 0.15;
                    total2 = this.getPrice() * 0.10;
                    total3 = this.getPrice() * 0.07;
                    this.setPrice(total+total2 + total3);
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

    setTop (b){
        top= b;
    }
};