const fibonacci = function(n) {
    if (typeof n == "string") n = Number(n);
    if (!isValid(n)) return "OOPS";
    if (n <= 1){
        return n;
    }
    nMinus1 = 1;
    nMinus2 = 0;
    for (let i = 2; i <= n; i++){
        tmp = nMinus1;
        nMinus1 = nMinus1 + nMinus2;
        nMinus2 = tmp;
    }
    return nMinus1;
};

function isValid(n){
    return n > 0;
}

// Do not edit below this line
module.exports = fibonacci;
