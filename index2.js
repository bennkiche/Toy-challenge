function detector (speed) {
    if (speed <0 || speed > 130){
        return "abnormal"
    }
    else if  (speed <= 70) {
        return "ok"
    }
    else if (speed >70 <=80) {
        return "points 2"
    }
    else if (speed >=130) {
        return "license suspended"
    }
}
console.log (detector(65))