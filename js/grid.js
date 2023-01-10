// Select color input
// let inputColor = document.getElementById("colorPicker");


// Select size input
let tableCanvas = document.getElementById("pixelCanvas");
// let iHeight = document.getElementById("inputHeight");
// let iWidth = document.getElementById("inputWidth");


// Make the grid
// let sPicker = document.getElementById("sizePicker");
// sPicker.addEventListener("submit", function (event) {
//     event.preventDefault();
//     console.log(sPicker)
//     makeGrid()
// });
makeGrid()

// When size is submitted by the user, call makeGrid()
function makeGrid() {
    // console.log(inputColor.value)
  let table = document.createElement('table')
    const height = 33;
    const width =25;
    for (let w = 0; w < width; w++) {
        const row = table.insertRow();
        for (let h = 0; h < height; h++) {
            const cell = row.insertCell();
            cell.addEventListener("click",event=>{
                event.preventDefault();
                event.target.style.backgroundColor = "#ff0000"
            })
        }
    }
    let children = tableCanvas.childNodes? tableCanvas.childNodes:[]
    if(children && children.length===1){
        tableCanvas.replaceChild(table,children[0])
    }else{
        tableCanvas.append(table)
    }
}