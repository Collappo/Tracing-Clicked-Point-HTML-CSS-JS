const tiles = document.getElementsByClassName("tile")
let target
let Point = {
    position: [0, 0]
    
}
let TilesPosition = {}
var OldPosition = []

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

    for (let i in OldPosition) {
        if (OldPosition[i] !== undefined) {
            document.getElementsByClassName(getKeyByValue(TilesPosition, OldPosition[i]))[0].style.background = "#f4f4f4";
        }
    }

    OldPosition = []

    OldPosition.push([...position])
    document.getElementsByClassName(getKeyByValue(TilesPosition, position))[0].style.background = "yellow";

    position[0] = position[0] + 1
    document.getElementsByClassName(getKeyByValue(TilesPosition, position))[0].style.background = "yellow";
    OldPosition.push([...position])
    
    position[0] = position[0] - 1
    position[1] = position[1] + 1;
    OldPosition.push([...position])
    document.getElementsByClassName(getKeyByValue(TilesPosition, position))[0].style.background = "yellow";

    position[0] = position[0] - 1
    position[1] = position[1] - 1;
    OldPosition.push([...position])
    document.getElementsByClassName(getKeyByValue(TilesPosition, position))[0].style.background = "yellow";

    position[0] = position[0] + 1
    position[1] = position[1] - 1;
    OldPosition.push([...position])
    document.getElementsByClassName(getKeyByValue(TilesPosition, position))[0].style.background = "yellow";
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

