const palindromes = function (word) {

    word = word.toLowerCase();
    word = removeInvalidChars(word);
    let left = 0;
    let right = word.length - 1;
    while (left < right){
        if (word.charAt(left) != word.charAt(right)) return false;
        left++;
        right--;
    }
    return true;
};

function removeInvalidChars(word){
    res = "";
    for (let i = 0; i < word.length; i++){
        c = word.charAt(i);
        if ('a' <= c && c <= 'z') res += c;
    }
    return res;
}

// Do not edit below this line
module.exports = palindromes;
