const Boxtype1= require("./Boxtype1");
const Boxtype2= require("./Boxtype2");
const Boxtype3 = require("./Boxtype3")
const Boxtype4 = require("./Boxtype4");
const Boxtype5 = require("./Boxtype4");



module.exports = class Order {
    constructor(cardGrade, height, lenght, width, quantity, colour, colour2, bottom, stabletops, corner, list) {
        this.add =0;
        this.orderList = list;
        this.valid = false;
        this.total =0;
        this.total2= 0;
        this.five = 0.05;
        this.addOrder(cardGrade, height, lenght, width, quantity, colour, colour2, bottom, corner , stabletops);
        this.orderList.addOrder(cardGrade, height, lenght, width, quantity, colour, colour2, bottom, bottom, add, this.valid);
    }


    addOrder(cardGrade, height, length, width, quantity, colour, colour2, bottom, corner, stabletops) {
        if (cardGrade >= 1 && cardGrade <= 3 && colour == false
            && colour2 == false && bottom == false && corner == false) {
            var box = new Boxtype1(width, height, length, cardGrade);
            box.getCost(cardGrade);
            if (stabletops) {
                this.total = box.getPrice() * quantity * this.five;
                this.total2 += this.total + box.getPrice() * quantity;
                this.add = this.total2;
                this.valid = true;
            } else {
                this.add = box.getPrice() * quantity;
                this.valid = true;
            }

        } else if (cardGrade >= 2 && cardGrade <= 4 && colour == true
            && colour2 == false && bottom == false && corner == false) {
            var box = new Boxtype2(width, height, length, cardGrade);
            box.setColour(colour)
            box.getCost(cardGrade);
            if (stabletops) {
                this.total = box.getPrice() * quantity * this.five;
                this.total2 += this.total + box.getPrice() * quantity;
                this.add = this.total2;
                this.valid = true;
            } else {
                this.add = box.getPrice() * quantity;
                this.valid = true;
            }
        } else if (cardGrade >= 2 && cardGrade <= 5 && colour == true
            && colour2 == true && bottom == false && corner == false) {

            var box =   new Boxtype3(width, height, length, cardGrade);
            box.setColour(colour);
            box.getCost(cardGrade);
            if (stabletops) {
                this.total = box.getPrice() * quantity * this.five;
                this.total2 += this.total + box.getPrice() * quantity;
                this.add = this.total2;
                this.valid = true;
            } else {
                this.add = box.getPrice() * quantity;
                this.valid = true;
            }
        } else if (cardGrade >= 2 && cardGrade <= 5 && colour == true
            && colour2 == true && bottom == true && corner == false) {
            var box = new Boxtype4(width, height, length, cardGrade);
            box.setColour(colour);
            box.setBottom(bottom);
            box.getCost(cardGrade);
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
        } else if (cardGrade >= 3 && cardGrade <= 5 && colour == true
            && colour2 == true && bottom == true && corner == true) {
            var box = new Boxtype5(width, height, length, cardGrade);
            box.setColour(colour);
            box.setBottom(bottom);
            box.setTop(corner);
            box.getCost(cardGrade);
            if (stabletops) {
                this.total = box.getPrice() * quantity * this.five;
                this.total2 += this.total + box.getPrice() * quantity;
                this.add = this.total2;
                this.valid = true;
            } else {
                this.add = box.getPrice() * quantity;
                this.valid = true;
            }

        }
        else {
            this.valid = false;
        }


    }

    getAdd(){
        return this.add;
    }


}