function grading (score){
    if (score < 0 || score > 100) {
        return "invalid mark"
    }
    else if (score <= 40){
        return "E"
    }
     else if  (score <= 49) {
        return "D"
    }
    else if  (score <= 59) {
        return "C"
    }
    else if (score <= 79) {
        return "B"
    }
    else if (score <= 100){
        return "A"
    }
}
console.log (grading (50))
//Grading is the function with variable score which changes and returns grade depending on the input score