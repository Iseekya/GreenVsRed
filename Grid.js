class Grid {
    constructor(x, y) {
        if (x > y || y >= 1000) {
            alert('Wrong values for size!');
            throw ('Wrong values for size!');
        }

        this.width = x;
        this.height = y;
        this.rows = [];
        this.cellIsGreenCount = 0;
    }

    addRows() {
        for (let i = 0; i < this.height; i++) {
            const row = prompt().trim();
            if (row.length === this.width) {
                this.rows.push(row.split('').map(v => {
                    const parsedVal = parseInt(v);
                    if (parsedVal !== 0 && parsedVal !== 1) {
                        alert('Wrong value. Enter only zeros or ones');
                        throw('Wrong value. Enter only zeros or ones');
                    }
                    return parsedVal;
                }));
                
            } else {
                alert(`Wrong width of the row! The lenght must be equal to ${this.width}`);
                throw (`Wrong width of the row! The lenght must be equal to ${this.width}`);
            }
        }
    }

    setCellCoordinates() {
        const [column, row, turns] = prompt().trim().split(',').map(v => parseInt(v));

        this.column = parseInt(column);
        this.row = parseInt(row);
        this.turns = parseInt(turns);
    }

}