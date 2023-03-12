const cafe = "cafè";
const cafe2 = "cafe";

const reserved = "réservé";
const reserved2 = "reserve";

function isEqualIgnoreDiacritic(str1, str2) {
    // Second Parameter: Locale; undefined: Use the locale of the current computer
    // Third Parameter: case: We care about case-sensitivity
    return str1.localeCompare(str2, undefined, {sensitivity: "case"}) === 0;
}

console.log(isEqualIgnoreDiacritic(cafe, cafe2));            // true
console.log(isEqualIgnoreDiacritic(reserved, reserved2));    // true
console.log(isEqualIgnoreDiacritic("ćeština", "cestina"));   // true

let names = ["Andrejs", "čandrejs", "candrejs", "Àndrejs"];

function sortStringArray(stringArray) {
    let copy = stringArray.slice();

    copy.sort((a,b) => a.localeCompare(b));

    return copy;
}

console.log(sortStringArray(names));
