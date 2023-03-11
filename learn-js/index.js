console.log("Message goes here...");


function isEmpty(str) {
    if(!isString(str)) {
        return true;
    }

    return str.length === 0;
}

function isEmprt2(str) {
    return (!str || str.length === 0);
}

function isBlank(str) {
    return str.trim().length === 0;
}

function isString(str) {
    return typeof str === 'string' || String.prototype.isPrototypeOf(str);
}

console.log('isEmpty: ...');

console.log(isEmpty(null));              // true
console.log(isEmpty(undefined));         // true
console.log(isEmpty(""));                // true
console.log(isEmpty(new String("")));    // true
console.log(isEmpty(" "));               // false
console.log(isEmpty("a"));               // false
console.log(isEmpty(new String("abc"))); // false

console.log('isBlank: ...');

console.log(isBlank("a"));        // false
console.log(isBlank(""));         // true
console.log(isBlank(" "));        // true
console.log(isBlank(" \t\n\r ")); // true
console.log(isBlank("\u2002"));   // true - Unicode Character: EN SPACE
