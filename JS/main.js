let car = {
    parts: [],
    x_val: 0,
    y_val: 0,
    x: "0px",
    y: "0px",
}

view();
function view() {
    let app = document.getElementById('app')
    app.innerHTML = /*HTML*/ `
       
        <div id="road">
        <div id="car" style="left: ${car.x}; top: ${car.y}"></div>
        <div>
        <div id="meetingFriend1"></div>
    `
}

document.addEventListener("keydown", (event) => {
    const keyName = event.keyCode
    const moveBy = 20

    const road = document.getElementById('road')
    console.log(road.clientWidth)
    console.log(road.clientHeight)

    switch (keyName) {
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

    // if (car.x_val <= 0) car.x_val = 0
    // if (car.y_val <= 0) car.y_val = 0
    // if (car.x_val >= road.clientWidth) car.x_val = road.clientWidth
    // if (car.y_val >= road.clientHeight) car.y_val = road.clientHeight

    car.x = car.x_val + "px"
    car.y = car.y_val + "px"

    view()
})























































































































    
    

    
    

    
    
    


    

    


    




    














































    