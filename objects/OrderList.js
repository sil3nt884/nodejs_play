module.exports = class OrderList{

    constructor (){
        this.total = 0;
        this.lastorder =0;
        this.list = [];
        this.basketlist = [];
        this.log;
        this.number =0;

    }

    addOrders(cardGrade,  height, lenght, width,  quantity, colour,  colour2,
    bottom, concer, price, valid){
        if(valid){
            var  basket = {cardGrade, height, lenght, width, quantity, colour, colour2, bottom, concer, price};
            this.basketlist.push(basket);
            this.number++;
            this.lastorder= price;
        }


    }

    getTotal(){
        return this.total;
    }

    removeLastOrder(){
        if (!(this.number <= 0)) {
            list.remove(this.number - 1);
            this.basketlist.remove(this.number - 1);
            this.number--;
        }
        if (this.number == 0) {
            this.total = 0;
        }
    }

    setTotal(orderTotal){
        this.total = orderTotal;
    }
    sumbitOrder (){
        if (this.number > 0) {
            this.generateReceipt();
            for (var i = 0; i < list.size(); i++) {
                list.remove(i);
                this.basketlist.remove(i);
                this.total = 0;
            }
        } else {

        }
        this.number = 0;
    }

    generateReceipt(){}


}