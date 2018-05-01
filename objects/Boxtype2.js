const  Box = require("./Box");


module.exports  = class Boxtype2 extends Box{




    constructor( w,  l,  h,  grade){

        super(w, l, h, grade);
        this.GC2= 0.59;
        this.GC3 = 0.68;
        this.GC4 =  0.92;
        this.colour = false;

    }

    getCost  (grade){
        var total = 0;
        switch(grade){
            case 2:
                this.setPrice(this.GC2 *  this.getTotalSurfaceArea());
                if(this.colour){
                    total = this.getPrice() * 0.12;
                    this.setPrice(total);
                }
                break;
            case 3 :
                this.setPrice(this.GC3 * this.getTotalSurfaceArea());
                if(this.colour){
                   total = this.getPrice() * 0.12;
                    this.setPrice(total);
                }
                break;
            case 4:
                this.setPrice(this.GC4 * this.getTotalSurfaceArea())
                if(this.colour){
                    total = this.getPrice() * 0.12;
                    this.setPrice(total);
                }
                break;
        }
    }

    setColour(b){
        colour = b;
    }

};