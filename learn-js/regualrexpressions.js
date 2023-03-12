const regexLiteral = /Script/g;
const regexObject = new RegExp("Script", "g");

const literal = "JAvaScript CoffeeScript";

console.log(literal.match(regexLiteral));
console.log(literal.match(regexObject));

let text = "The countdown is starting: 3... 2... 1...";
let digits = /\d+/;
let digitsGlobal = /\d+/g;

console.log(digits.test(text)); // true

console.log(text.search(digits)); // 27; Return -1, if there were no match

console.log(text.match(digits)); // ['3', index: 27, input: 'The countdown is starting: 3... 2... 1...', groups: undefined]

console.log(text.match(digits).at(0)); // 3

console.log(text.match(digitsGlobal)); // [ '3', '2', '1' ]

console.log("MatchAll...");
let matches = text.matchAll(digitsGlobal);
console.log(matches);

for (let match of matches) {
    console.log(`Found value "${match[0]}" at index: ${match.index}.
                 The search string was: ${match.input}`);     
}

console.log("Repalce / Repalce All: ...");
console.log(text.replace(digits, "#"));
console.log(text.replace(digitsGlobal, "#"));

