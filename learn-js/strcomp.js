console.log("Basic comparision: ...");

console.log('a' === "a");                                // true

let b = "b";
console.log('ab' === `a${b}`);                           // true

console.log('a' === new String('a'));                    // false - string vs object
console.log('a' === new String('a').toString());         // true - string vs object

function areEqual(str1, str2) {
    return str1 === str2;
}

function areEqual2(str1, str2) {
    let s1 = coerceObjectString(str1);
    let s2 = coerceObjectString(str2);

    return s1 === s2;
}

function coerceObjectString(str) {
    if(typeof str === 'object' && String.prototype.isPrototypeOf(str)) {
        return str.toString();
    } else {
        return str;
    }
}

console.log("areEqual: ...");
console.log(areEqual("a", "a"));                         // true
console.log(areEqual("a", "A"));                         // false
console.log(areEqual("a", new String("a")));             // false
console.log(areEqual(new String("a"), new String("a"))); // false

console.log("areEqual v2: ...");
console.log(areEqual2("a", "a"));                         // true
console.log(areEqual2("a", "A"));                         // false
console.log(areEqual2("a", new String("a")));             // true
console.log(areEqual2(new String("a"), new String("a"))); // true
