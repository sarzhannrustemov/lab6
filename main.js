//3
function circleArea(r){
    let pi = 3.14
    let area = pi*r**2
    console.log(area)
}

circleArea(2)
circleArea(5)

//12
function betweenZeroAndOne(x){
    if (x >= 0 && x <= 1){
        console.log(true)
    }else{
        console.log(false)
    }
}

betweenZeroAndOne(0.7)
betweenZeroAndOne(3)

//1
function Hello(){
    for (let i = 0; i < 3; i++){
        console.log("Hello, World!")
    }
}

Hello()
