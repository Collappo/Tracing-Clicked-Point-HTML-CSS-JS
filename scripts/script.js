const tiles = document.getElementsByClassName("tile")
let target
let Point = {
    position: [0, 0]
    
}
let TilesPosition = {}

function getKeyByValue(object, value) {
    for (let key in object) {
        if (Array.isArray(object[key]) && Array.isArray(value)) {
            if (object[key].length === value.length && object[key].every((v, i) => v === value[i])) {
                return key;
            }
        } else if (object[key] === value) {
            return key;
        }
    }
    return null;
}

function changeColor(position) {
    let classNameOfTile = getKeyByValue(TilesPosition, position);
    console.log(document.getElementsByClassName(classNameOfTile)[0].style.background = "yellow");

    position[0] = 
    classNameOfTile = getKeyByValue(TilesPosition, );
}

function changePosition(position, target) {
    

}

function targetChanged(target = [0, 0]) {
    changePosition(Point.position, target)
}

for (let i = 0; i < tiles.length; i++) {
    TilesPosition[tiles[i].classList[1]] = [i % 10, i > 9 ? parseInt(i.toString()[0]) : 0]

    tiles[i].addEventListener("click", () => {
        target = TilesPosition[tiles[i].classList[1]]
        console.log(tiles[i], target)
        targetChanged(target)
    })
    console.log(i)
}

