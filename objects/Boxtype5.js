const  Box = require("./Box");

module.exports  = class Boxtype5 extends Box{

    constructor( w,  l,  h,  grade){
        super(w, l, h, grade);
        this.GC3 = 0.68;
        this.GC4 =  0.92;
        this.colour = false;
        this.bottom = false;
        this.top = false;
        this.GC5 = 1.30;

    }

    getCost (){
        var total = 0;
        var total2 = 0;
        var total3 = 0;
        switch(this.grade){
            case 3 :
                this.setPrice(this.GC3 * this.getTotalSurfaceArea());
                if(this.colour && this.bottom && this.top){
                    var TSA = this.GC3 * this.getTotalSurfaceArea()
                    total = TSA * 0.15;
                    total2 = TSA * 0.10;
                    total3 = TSA * 0.07;
                    this.setPrice(total+total2 + total3+TSA);
                }
                break;
            case 4:
                this.setPrice(this.GC4 * this.getTotalSurfaceArea())

                if(this.colour && this.bottom && this.top){
                    var TSA = this.GC34* this.getTotalSurfaceArea()
                    total = TSA * 0.15;
                    total2 = TSA * 0.10;
                    total3 = TSA * 0.07;
                    this.setPrice(total+total2 + total3+TSA);
                }
                break;
            case 5:
                this.setPrice(this.GC5 * this.getTotalSurfaceArea())
                if(this.colour && this.bottom && this.top){
                    var TSA = this.GC5 * this.getTotalSurfaceArea()
                    total = TSA * 0.15;
                    total2 = TSA * 0.10;
                    total3 = TSA * 0.07;
                    this.setPrice(total+total2 + total3+TSA);
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

    setTop (b){
        this.top= b;
    }
};