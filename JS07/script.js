console.log("Hello")
//1. No arguments
const wallPaint = function () {
    console.log("The wall has been painted red")
};
wallPaint();

//2. One argument:
const wallPaint2 = function (colors) {
    console.log("The wall has been painted " + colors)
};
wallPaint2("green");
wallPaint2("blue");
wallPaint2(); //The wall has been painted undefined - function without an argument is undefined.

//3. Two arguments:
const wallPaint3 = function (otherWall, colors) {
    console.log("The " + otherWall + " wall has been painted " + colors)
};
wallPaint3("south", "orange");
wallPaint3("east", "grey");

//  Change the order of the arguments:
const wallPaint4 = function (otherWall, colors) {
    console.log("The " + otherWall + " wall has been painted " + colors)
};
wallPaint4("south", "orange");
wallPaint4("broun", "west");
// Te order mathers : The broun wall has been painted west.

// Change the order of the arguments in the function.
const wallPaint5 = function (colors, otherWall) {
    console.log("The " + otherWall + " wall has been painted " + colors)
};
wallPaint5("south", "orange");
wallPaint5("east", "grey");
/* The order mathers: The orange wall has been painted south.
                     The grey wall has been painted east.
*/