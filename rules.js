const Cell = require('./Cell.js');


const grid = (x, y) => {
    let grid = [];
    for (var i = 0; i < x; i++) {
        grid.push([]);
        grid[i].push(new Array(y));

        for (var j = 0; j < y; j++) {
            grid[i][j] = 0;
        }
    }
    return grid;
}

// Create 2D Array to hold objects that manage the logic for each cell in the next generation
const objectGrid = (x, y) => {
    let grid = [];
    for (var i = 0; i < x; i++) {
        grid.push([]);
        grid[i].push(new Array(y));

        for (var j = 0; j < y; j++) {
            grid[i][j] = new Cell();
        }
    }
    return grid;
}

//Create Generation Zero with y lines from input
const fill = (grid, y) => {
    //iterate over each y string
    for (let i = 0; i < y.length; i++) {

        let yLines = [];

        //iterate over each number in the string
        for (let j = 0; j < y[i].length; j++) {
            yLines[j] = y[i][j];
            //set value for each cell
            grid[i][j] = Number(yLines[j]);
        }
    }
    return grid;
};

module.exports = { initGrid, initObjectGrid, fillY };