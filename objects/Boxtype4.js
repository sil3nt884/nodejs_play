const  Box = require("./Box");


module.exports  = class Boxtype4 extends Box{


    constructor( w,  l,  h,  grade){

        super(w, l, h, grade);
        this.GC2  = 0.59;
        this.GC3 = 0.68;
        this.GC4 = 0.92;
        this.colour = false;
        this.bottom = false;
        this.GC5 = 1.30
    }

    getCost = function (grade){
        var total = 0;
        var total2 = 0;
        switch(grade){
            case 2:
                this.setPrice(this.GC2 *  this.getTotalSurfaceArea());
                if(this.colour && this.bottom){
                    total = this.getPrice() * 0.15;
                    total2 = this.getPrice() * 0.10;
                    this.setPrice(total+total2);
                }
                break;
            case 3 :
                this.setPrice(this.GC3 * this.getTotalSurfaceArea());
                if(this.colour && this.bottom){
                    total = this.getPrice() * 0.15;
                    total2 = this.getPrice() * 0.10;
                    this.setPrice(total+total2);
                }
                break;
            case 4:
                this.setPrice(this.GC4 * this.getTotalSurfaceArea())
                if(this.colour && this.bottom){
                    total = this.getPrice() * 0.15;
                    total2 = this.getPrice() * 0.10;
                    this.setPrice(total+total2);
                }
                break;
            case 5:
                this.setPrice(this.GC5 * this.getTotalSurfaceArea())
                if(this.colour && this.bottom){
                    total = this.getPrice() * 0.15;
                    total2 = this.getPrice() * 0.10;
                    this.setPrice(total+total2);
                }
                break;
        }
    }

    setColour(b){
        this.colour = b;
    }

    setBottom(b){
        this.bottom = b;
    }

};