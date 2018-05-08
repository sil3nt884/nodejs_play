const  Box = require("./Box");


module.exports  = class Boxtype2 extends Box{




    constructor( w,  l,  h,  grade, colour){

        super(w, l, h, grade);
        this.GC2= 0.59;
        this.GC3 = 0.68;
        this.GC4 =  0.92;
        this.colour = colour;
        this.total = 0;

    }

    getCost  (){

        switch(this.grade){
            case 2:
                this.setPrice(this.GC2 *  this.getTotalSurfaceArea());
                //console.log(this.colour);
                if(this.colour){
                    var TSA = this.GC2 *  this.getTotalSurfaceArea();
                    this.total =+ TSA * 0.12;
                    this.setPrice(this.total + TSA);
                }

                break;
            case 3 :
                this.setPrice(this.GC3 * this.getTotalSurfaceArea());
                if(this.colour){
                    var TSA = this.GC3 *  this.getTotalSurfaceArea();
                    this.total =+ TSA * 0.12;
                    this.setPrice(this.total + TSA);
                }
                break;
            case 4:
                this.setPrice(this.GC4 * this.getTotalSurfaceArea())
                if(this.colour){
                    var TSA = this.GC4 *  this.getTotalSurfaceArea();
                    this.total =+ TSA * 0.12;
                    this.setPrice(this.total + TSA);
                }
                break;
        }


    }

    setColour(b){
        this.colour = b;
    }

};