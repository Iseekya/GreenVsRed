//Next generation + green counter

class Cell {
    constructor() {
        this.nextGenValue = 0;
        this.greenCounter = 0;
    }

    getValue() {
        return this.nextGenValue;
    }

    setValue(value) {
        this.nextGenValue = value;
    }

    increaseCounter() {
        this.greenCounter++;
    }
};



module.exports = Cell;