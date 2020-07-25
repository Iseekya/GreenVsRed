const { applyRules, formNextGeneration } = require('./utils/rules');
const { grid, objectGrid, fill } = require('./utils/initGrid');


//input values
let x = 4; //width
let y = 4; //length
let lines = ['1001', '1111', '0100', '1010']; //  lines strings
let x1 = 2; // cell coordinates
let y1 = 2; // cell coordinates
let gens = 15; // generations


//create initial grid for cell values and another grid for objects
let grid = grid(x, y);
let objectGrid = objectGrid(x, y);
// use yLines to form Generation Zero
let genZero = fill(grid, yLines);


//iterate grid to form generations, get values for next generation based on rules, create next generation
const formGenerations = () => {
    for (let i = 0; i < gens; i++) {
        applyRules(objectGrid, genZero); // check rules and set nextGenValue in object
        formNextGeneration(objectGrid, genZero) // use nextGenValue to create next generation (mutate genZero)
    }
    let result = objectGrid[y1][x1].greenCounter; //return counter value after N generations
    console.log(`For ${gens} generations, cell with coordinates ${x1}x${y1} was green ${result} times!`);
};


formGenerations();