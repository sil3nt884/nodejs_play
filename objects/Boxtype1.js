const  Box = require("./Box");
;
module.exports = class Boxtype1 extends Box{

constructor( w,  l,  h,  grade){

    super(w, l, h, grade);
    this.GC1 = 0.45;
    this.GC2 = 0.59;
    this.GC3 = 0.68;

}

getCost (){

    switch(this.grade){
        default :
           // console.log("did this grade change?"+grade);
            break
        case 1:
            this.setPrice(this.GC1 *  this.getTotalSurfaceArea());
           //console.log("box 1"+this.getPrice())
            break;
        case 2 :
            this.setPrice(this.GC2 * this.getTotalSurfaceArea());
           // console.log("box 1"+this.getPrice())
            break;
        case 3:
            this.setPrice(this.GC3 * this.getTotalSurfaceArea())
    }
}

};