const margin = 20
let buddy;
let buddyId;

let car = {
    parts: [],
    coolness: 5,
    x_val: margin,
    y_val: margin,
    x: margin + "px",
    y: margin + "px",
    canMove: true,
};
let greetingArray = [
    "*Waves at you!* Impressive ride!",
    "*Nods at you* Sweet wheels!",
    "*Thumbs up* Looking good!",
    "*Salutes* Killer car!",
    "*Nods at you* Any mods?",
    "*Waves at you* Stylish choice!",
    "*Thumbs up* Rad ride!",
    "*Salutes* Sharp car!",
    "*Waves at you!* Fast and furious!",
    "*Nods at you* Customized much?",
    "*Thumbs up* Top-notch!",
    "*Salutes* Dope wheels!",
    "*Waves at you!* Cheers, mate!",
    "*Nods at you* Any favorite features?",
    "*Thumbs up* Let's cruise!"];
// 0 - 14
// let responseId = Math.floor(Math.random() * 14); Gir et tall mellom 0 - 14, som kan brukes  for å hente ut index til en tilfeldig respons.

let keysPressed = [];
let partNames = [
    "Fluffy Sideskirt Covers",
    "Long Tail Antenna",
    "Cat-Ear Side Mirrors",
    "Paw Print Alloy Wheels",
    "Whisker Grille Decal",
    "Cat Eye Headlights",
    "Tail-shaped Exhaust Pipe",
    "Purr-fectly Cushioned Seats",
    "Furry Steering Wheel Cover",
    "Cat Paw Gas and Brake Pedals",
    "Meow Melody Horn System",
    "Curled-up Cat Tail Gear Shift Knob",
    "Playful Pounce Suspension System"
];
//  0 - 12
// let partsId = Math.floor(Math.random() * 12);  Gir et tall mellom 0 - 12, som kan brukes  for å hente ut index til en tilfeldig del.

let parts = []
let currentResponse

const coolnessMax = 9000;
let buddyChance = 0;

//setInterval(handleParts, 100)
setInterval(buddyAppear, 3500)

view();
function view() {
    let app = document.getElementById('app')
    app.innerHTML = /*HTML*/ `
    <div id="roadContainer">
    <!-- Left sidewalk - contains friend -->
        <div id="sidewalk1" class="sidewalk">
        </div>
        <div id="road">
        <div id="leftRoad"></div>
        <div id="rightRoad"></div>
        <div id="car" style="left: ${car.x}; top: ${car.y}"></div>
        
        </div>
        <div id="sidewalk2" class="sidewalk">
            ${drawBuddy()}
        </div>
        <div id="coolnessFactor"></div> <!--rar ""-ting her-->
    </div>
    `
    if (car.coolness > 9000) {                            // Controller funksjon, [trenger egen funksjon, eller må legges i en annen funksjon]
        document.getElementById('').innerHTML = alert("It's over 9000!!!\nIT'S TOO MUCH--")
        alert("car exploded")
    }
}

document.addEventListener("keydown", (event) => {
    const keyName = event.keyCode
    const moveBy = 20
    
    const road = document.getElementById('road')
    const carElem = document.getElementById('car')

    if (!keysPressed.includes(keyName)) keysPressed.push(keyName)
    console.log(keysPressed)

    //bruker kan bruke piltaster på tastatur for å styre bil
    // tallene er piltaster
    if (car.canMove){
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
    })}


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
        if (keyName != e) _keys.push(e)
    })
    keysPressed = _keys
})



/*function createPart() {
    const road = document.getElementById('road')
    let part = {
        name: partNames[Math.random() * partNames.length],
        coolness: Math.random() * 100, 
        x: Math.random() * road.clientWidth,
        y: margin,
    }
    return part
}

function handleParts() {
    if (Math.random() > 0.9) {
        parts.push(createPart())
    }

    for (let part in parts) {
       
    }
}*/

function createBuddy(hasPart, greeting) {
    let buddy = {
        part: hasPart,
        greeting: greeting,
        y: 0,
    }
    return buddy;
}

function drawBuddy(){
    if (buddy == undefined || buddy == null){
        return""
    }
    return`<div>
                <div id="meetingFriend1" style="top: ${buddy.y + 'px'}"> ${speakingBubble()}
                </div>
            </div>`
}


function buddyAppear(greetingIndex) {
    if (!buddy){
        buddyChance = Math.floor(Math.random() * 10) + 1;

    if (buddyChance == 3 || buddyChance == 6 || buddyChance == 9) {
        buddy=createBuddy(false, greetingArray[greetingIndex])
    }
    if (buddyChance == 1 || buddyChance == 5) {
        buddy=createBuddy(true, greetingArray[greetingIndex])
    }
    if (buddyChance == 2 || buddyChance == 4 || buddyChance == 8 || buddyChance == 10) {
        buddyChance == 10;
    }
    }
    if (buddy && !buddyId){
        buddyId=setInterval((e) => {
            buddy.y+=10;
            if (buddy.y >= car.y_val){
                clearInterval(buddyId)
                car.canMove = false
            }
            view();
        }, 100);
    }


    //Alt er relativt!
    /* 
    Tenkte på å kjøre buddyAppear på intervaller for å hente ut verdi, 
    hvis verdi tilsvarer 1 - 5 skal en kompis dukke opp med en del
    hvis verdi tilsvarer 2 - 4 - 8 - 10 - skal ikke en kompis dukke opp
    hvis verdi tilsvarer 3 - 6 - 9 skal en kompis dukke opp
    */

}

function calculateResponse() {
    return Math.floor(Math.random() * greetingArray.length);}//Legg gjerne til hvor lang array er, ved array.length for å få en rå verdi
    
function buddyGreet() {
    if (!car.canMove){
        getResponse(), buddyAppear()
    }

}

function speakingBubble(){
    if (!car.canMove){
        currentResponse = greetingArray[calculateResponse()]
        return`<div>
                <img id="bubble" src="Assets/snkkebble.png">
                <div id="responses">${currentResponse}</div>
                </div>`
    } return ""
}

function answer(){
    if (greetingArray[0,5].includes("Waves")){

    }
}

function endGame() {
    if (car.coolness <= 0) {
        // Boss screen
    }

}

