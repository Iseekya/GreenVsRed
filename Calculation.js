class Calculation {
    static nearCell(row, index, instance) {
        const nearNum = row[index] === 0 || row[index] ? row[index] : null;
        if (nearNum === 0) {
            instance.nearReds += 1;
        } else if (nearNum === 1) {
            instance.nearGreens += 1;
        }
    }

    static setCells(instance, rowIndex, index) {
        instance.nearReds = 0;
        instance.nearGreens = 0;

        this.nearCell(instance.rows[rowIndex], index - 1, instance);
        this.nearCell(instance.rows[rowIndex], index + 1, instance);

        if (instance.rows[rowIndex - 1]) {
            this.nearCell(instance.rows[rowIndex - 1], index, instance);
            this.nearCell(instance.rows[rowIndex - 1], index + 1, instance);
            this.nearCell(instance.rows[rowIndex - 1], index - 1, instance);
        }

        if (instance.rows[rowIndex + 1]) {
            this.nearCell(instance.rows[rowIndex + 1], index, instance);
            this.nearCell(instance.rows[rowIndex + 1], index + 1, instance);
            this.nearCell(instance.rows[rowIndex + 1], index - 1, instance);
        }
    }

    static nextGeneration(instance) {
        const newRows = [];
        for (let rowIndex = 0; rowIndex < instance.height; rowIndex++) {
            instance.rows[rowIndex].forEach((num, index) => {
                this.setCells(instance, rowIndex, index);

                if (!newRows[rowIndex + 1]) {
                    newRows.push([]);
                }

                if (num === 0) {
                    if (instance.nearGreens === 3 || instance.nearGreens === 6) {
                        newRows[rowIndex].push(1);
                    } else {
                        newRows[rowIndex].push(0);
                    }
                }

                if (num === 1) {
                    if (instance.nearGreens === 2 || instance.nearGreens === 3
                        || instance.nearGreens === 6) {
                        newRows[rowIndex].push(1);
                    } else {
                        newRows[rowIndex].push(0);
                    }
                }

                if (rowIndex === instance.row && index === instance.column
                    && newRows[rowIndex][index] === 1) {
                    instance.cellIsGreenCount += 1;
                }
            });
        }
        instance.rows = newRows;
    }

    static calculateGenerations(instance) {
        for (let i = 0; i < instance.turns; i++) {
            this.nextGeneration(instance);
        }

        const result = document.getElementById('result');
        result.innerHTML = `The cell [${instance.column}, ${instance.row}] was ${instance.cellIsGreenCount}`;
    }
}