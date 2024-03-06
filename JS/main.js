const margin = 20

let car = {
    parts: [],
    x_val: margin,
    y_val: margin,
    x: margin + "px",
    y: margin + "px",
}
let greetingArray = ["*Waves at you!*","*Nods at you* Sweet ride!","" ]

let keysPressed = []

const coolnessMax = 9000;
let buddyChance = 0;
let coolness = 5;

view();
function view() {
    let app = document.getElementById('app')
    app.innerHTML = /*HTML*/ `
    <div id="roadContainer">
    <!-- Left sidewalk - contains friend -->
        <div id="sidewalk1" class="sidewalk">
        <div id="meetingFriend1"></div>
        </div>
        <div id="road">
            <div id="leftRoad"></div>
            <div id="rightRoad"></div>
            <div id="car" style="left: ${car.x}; top: ${car.y}"></div>
            
        </div>
        <div id="sidewalk2" class="sidewalk"></div>
        <div id="coolnessFactor"></div>
    </div>
    `
    if(coolness>=9000){
        document.getElementById('').innerHTML=alert("It's over 9000!!!\nIT'S TOO MUCH--")
        alert("car exploded")
    }
}

document.addEventListener("keydown", (event) => {
    const keyName = event.keyCode
    const moveBy = 20

    if (!keysPressed.includes(keyName)) keysPressed.push(keyName)
    console.log(keysPressed)

    const road = document.getElementById('road')
    const carElem = document.getElementById('car')

    //bruker kan bruke piltaster på tastatur for å styre bil
    // tallene er piltaster
    keysPressed.forEach((e) => {
        switch (e) {
            case 37:
                car.x_val -= moveBy
                break
            case 38:
                car.y_val -= moveBy
                break
            case 39:
                car.x_val += moveBy
                break
            case 40: 
                car.y_val += moveBy
                break
        }       
    })

    const minY = margin
    const minX = margin
    const maxY = road.clientHeight - carElem.clientHeight - margin;
    const maxX = road.clientWidth - carElem.clientWidth - margin;

    if (car.x_val <= minX) car.x_val = minX
    if (car.y_val <= minY) car.y_val = minY
    if (car.x_val >= maxX) car.x_val = maxX
    if (car.y_val >= maxY) car.y_val = maxY 

    car.x = car.x_val + "px"
    car.y = car.y_val + "px"

    view()
})

document.addEventListener("keyup", (event) => {
    const keyName = event.keyCode
    let _keys = []
    keysPressed.forEach((e) => {
        if (!keyName == e) _keys.push(e)
    })
    keysPressed = _keys 
})


function createBuddy(hasPart, greeting) {

 let buddy = {
        part: hasPart,
        greeting: greeting,
    }
    return buddy;
}

function buddyAppear(somethingElse,greetingIndex){ 
    function chanceAppear(){
    buddyChance = Math.floor(Math.random() * 10)+ 1;
    }
    if(buddyChance == 3 || buddyChance == 6 || buddyChance == 9){
        createBuddy(false, greetingArray[greetingIndex])
    }
    if(buddyChance == 1 || buddyChance == 5){
        createBuddy(true, greetingArray[greetingIndex])
    }
    if(buddyChance == 2 || buddyChance == 4 || buddyChance == 8 || buddyChance == 10){
        buddyChance == 10;
    }

    setInterval(chanceAppear, 3500)
    

    /* 
    Tenkte på å kjøre buddyAppear på intervaller for å hente ut verdi, 
    hvis verdi tilsvarer 1 - 5 skal en kompis dukke opp med en del
    hvis verdi tilsvarer 2 - 4 - 8 - 10 - skal ikke en kompis dukke opp
    hvis verdi tilsvarer 3 - 6 - 9 skal en kompis dukke opp
    */
    
}


function buddyGreet(){
    
    
    
}


















































































































































