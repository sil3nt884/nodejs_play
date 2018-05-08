const Boxtype1= require("./Boxtype1");
const Boxtype2= require("./Boxtype2");
const Boxtype3 = require("./Boxtype3");
const Boxtype4 = require("./Boxtype4");
const Boxtype5 = require("./Boxtype5");



module.exports = class Order {
    constructor(cardGrade, height, lenght, width, quantity, colour, colour2, bottom, stabletops, corner) {
        this.add =0;
        this.valid = false;
        this.total =0;
        this.total2= 0;
        this.five = 0.05;
        console.log("box created")
        this.addOrder(cardGrade, height, lenght, width, quantity, colour, colour2, bottom, corner , stabletops);
        //this.orderList.addOrders(cardGrade,  height, lenght, width,  quantity, colour,  colour2, bottom, corner, add, this.valid);
    }


    addOrder(cardGrade, height, length, width, quantity, colour, colour2, bottom, corner, stabletops) {

        if (cardGrade >= 1 && cardGrade <= 3 && colour == false
            && colour2 == false && bottom == false && corner == false) {

            var box = new Boxtype1(width, height, length, cardGrade);
            box.getCost();
            if (stabletops) {
                this.total = box.getPrice() * quantity * this.five;
                this.total2 += this.total + box.getPrice() * quantity;
                this.add += this.total2;
                this.valid = true;
            } else {
                this.add += box.getPrice() * quantity;
                this.valid = true;
                console.log("Box 1 matched");

            }

        } else if (cardGrade >= 2 && cardGrade <= 4 && colour == true
            && colour2 == false && bottom == false && corner == false) {
           var box2 = new Boxtype2(width, height, length, cardGrade, colour);
            box2.getCost();
            if (stabletops) {
                this.total = box2.getPrice() * quantity * this.five;
                this.total2 += this.total + box2.getPrice() * quantity;
                this.add = this.total2;
                this.valid = true;
            } else {
                this.add = box2.getPrice() * quantity;
                console.log(this.add);
                this.valid = true;
            }
            console.log("Box 2 matched");

        }
        else if (cardGrade >= 2 && cardGrade <= 5 && colour == true
            && colour2 == true && bottom == false && corner == false) {

            var box3 =   new Boxtype3(width, height, length, cardGrade);
            box3.getCost();
            box3.setColour(colour);
            if (stabletops) {
                this.total = box3.getPrice() * quantity * this.five;
                this.total2 += this.total + box3.getPrice() * quantity;
                this.add = this.total2;
                this.valid = true;
            } else {
                this.add = box3.getPrice() * quantity;
                this.valid = true;
            }
            console.log("Box 3 matched");
        }
        else if (cardGrade >= 2 && cardGrade <= 5 && colour == true
            && colour2 == true && bottom == true && corner == false) {
            var box = new Boxtype4(width, height, length, cardGrade);

            box.setColour(colour);
            box.setBottom(bottom);
            box.getCost();
            if (stabletops) {
                this.total = box.getPrice() * quantity * this.five;
                this.total2 += this.total + box.getPrice() * quantity;
                this.add = this.total2;
                this.valid = true;
            }
            else {
                this.add = box.getPrice() * quantity;
                this.valid = true;
            }
            console.log("Box 4 matched");
        }
        else if (cardGrade >= 3 && cardGrade <=5 && colour == true
            && colour2 == true && bottom == true && corner == true) {
            var box = new Boxtype5(width, height, length, cardGrade);
            box.getCost();
            box.setColour(colour);
            box.setBottom(bottom);
            box.setTop(corner);
            if (stabletops) {
                this.total = box.getPrice() * quantity * this.five;
                this.total2 += this.total + box.getPrice() * quantity;
                this.add = this.total2;
                this.valid = true;
            } else {
                this.add = box.getPrice() * quantity;
                this.valid = true;
            }
            console.log("Box 5 matched");

        }
        else {
            this.valid = false;
            console.log("no match found");
        }


    }

    getAdd(){
        return this.add;
    }


}