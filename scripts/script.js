const tiles = document.getElementsByClassName("tile")
let target
let Point = {
    position: [0, 0]
    
}
let TilesPosition = {}

function getKeyByValue(object, value) {
    console.log(object, value)
    for (let key in object) {

        if (object[key] === value) {
            console.log("EEE")
            return key
        }
    }
}

function changeColor(position) {
    TilesPosition
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

