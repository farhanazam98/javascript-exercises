const sumAll = function(num1 , num2) {
    if (!isValid(num1) || !isValid(num2)){
        return "ERROR";
    }
    let sum = 0;
    if (num1 < num2){
        for (let i = num1; i <= num2; i++){
            sum += i;
        }
    } else {
        for (let i = num2; i <= num1; i++){
            sum += i;
        }
    }
    return sum
};

function isValid(num){
    if (typeof num === "number" && num >= 0){
        return true;
    }
    return false;
}

// Do not edit below this line
module.exports = sumAll;
