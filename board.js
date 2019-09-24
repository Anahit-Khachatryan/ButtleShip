var rows = 10;
var cols = 10;
var squareSize = 50;
var gameBoardContainer = document.getElementById("gameboard");
for (let i = 0; i < cols; i++) {
	for (let j = 0; j < rows; j++) {
			var square = document.createElement("div");
		gameBoardContainer.appendChild(square);
		square.id = 's' + j + i;			
    var topPosition = j * squareSize;
		var leftPosition = i * squareSize;			
		square.style.top = topPosition + 'px';
		square.style.left = leftPosition + 'px';						
	}
}
// $( function() {
//   $( "#draggable" ).draggable();
// } );

var ship = document.getElementById("ship");
console.log(ship);

var row2 = 5;

for(let i = 1; i < row2; i++){
    let square = document.createElement("div");
    ship.appendChild(square);
    // square.id = 's'+i;
    // let leftPosition = i*squareSize;
    // // console.log(leftPosition);
    // square.style.left = leftPosition + 'px';
    let leftwidth = i * squareSize;
    square.style.width = leftwidth + "px";
    // square.setAttribute("draggable", ID)

}

console.log(ship.length);
for(let i = 0; i < ship.length; i++) {
  let item = todoItems[i];
  //Mouse Button Down
  item.addEventListener("mousedown", (e) => { onMouseDown(e, item); });
  //Mouse Move (Under the Page Body since mouse moves right there)
  document.body.addEventListener("mousemove", (e) => {
      onMouseMove(e, item);
  });
  //Mouse Up 
  item.addEventListener("mouseup", (e) => {
    onMouseUp(e, item);
  })
};
function onMouseDown(e, item) {
  isMouseDown = true;
  
  mouseOffset = {x: item.offsetLeft - e.clientX, y: item.offsetTop - e.clientY};
  
  item.style.backgroundColor = "#E57373";
}
//Mouse Up 
function onMouseUp(e, item) {
  isMouseDown = false;
  item.style.backgroundColor = "#F44336";
}
function onMouseMove(e, item) {
  e.preventDefault(); ///< Stops the Default Element Bahiavor 
  if(isMouseDown) {
    //Move Item only when mouse is down 
    item.style.left = e.clientX + mouseOffset.x + "px";
    item.style.top = e.clientY + mouseOffset.y + "px";
    //Concatinating Numbers with Strings is Javascript gives you a String
  }
}