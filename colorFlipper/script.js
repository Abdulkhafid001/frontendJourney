let listOfColor = ["gray", "yellow", "green", "blue", "orange"];
function generateRandomNum() {
    let randNum = Math.floor(Math.random() * listOfColor.length);
    return randNum;
}

console.log(generateRandomNum());
function changeColor() {
    // get the container to change its backgoround color
    var container = document.getElementById("container");
    container.style.backgroundColor = listOfColor[generateRandomNum()];
    // get the textNode of the p Element to display the color value
    var colorValue = document.getElementById("colorValue");
    colorValue.innerHTML = "background-color: " + listOfColor[generateRandomNum()];
}