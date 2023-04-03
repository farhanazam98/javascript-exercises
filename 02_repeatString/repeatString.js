const repeatString = function(s, n) {
    if (n < 0){
        return "ERROR";
    }
    let finalString = '';
    for (let i = 0; i < n; i++){
        finalString += s;
    }
    return finalString
};


// Do not edit below this line
module.exports = repeatString;
