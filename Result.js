const size = prompt();


if (size) {
    const [x, y] = size.trim().split(', ').map(val => parseInt(val));
    const instance = new Grid(x, y);
    instance.addRows();
    instance.setCellCoordinates();

    Calculation.calculateGenerations(instance);
}