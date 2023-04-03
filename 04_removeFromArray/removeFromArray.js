const removeFromArray = function(arr, toRemove) {
    s = new Set();
    for (var i = 1; i < arguments.length; i++) {
        s.add(arguments[i]);
    }
    newArray = [];
    for (item of arr){
        if (!s.has(item)){
            newArray.push(item);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
