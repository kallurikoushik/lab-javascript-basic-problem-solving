// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

var proGrad_1 = "Koushik";
var proGrad_2 = "Bhuvana";

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

var proGrad_1Len = proGrad_1.length;
var proGrad_2Len = proGrad_2.length;
if (proGrad_1Len > proGrad_2Len) {
    console.log("The driver has the longest name, it has ", proGrad_1Len, "characters.");
} else if (proGrad_1Len < proGrad_2Len) {
    console.log("The driver has the longest name, it has ", proGrad_2Len, "characters.");
} else {
    console.log("Wow, you both have equally long names, ", proGrad_1Len, "characters !.");
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5. 

console.log("Vowels and their indexs for driver");

var result1 = "";
var index1 = "";
var flag = 0,
    count = 0;
for (var index = 0; index < proGrad1.length; index++) {
    var temp = proGrad_1[index];
    if (temp == "a" || temp == "e" || temp == "i" || temp == "o" || temp == "u") {
        result1 = result1.concat(temp.charAt(i) + "");
        index1 = index1.concat(proGrad_1.indexOf(temp));
        flag = 1;
        count += 1;
    }
}

console.log(proGrad_1, result1, index1);

console.log("Vowels and their indexs for navigator");

var result1 = "";
var index1 = "";
var flag = 0,
    count = 0;
for (var index = 0; index < proGrad1.length; index++) {
    var temp = proGrad_1[index];
    if (temp == "a" || temp == "e" || temp == "i" || temp == "o" || temp == "u") {
        result1 = result1.concat(temp.charAt(i) + "");
        index1 = index1.concat(proGrad_1.indexOf(temp));
        flag = 1;
        count += 1;
    }
}

console.log(proGrad_1, result1, index1);

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters


function upperCase(temp) {
    // var numUpper = 0;
    if (temp == temp.toUpperCase()) {
        // numUpper++;
        return true;
    }
    // return numUpper;
}

function lowerCase(temp) {
    // var numLower = 0;
    if (temp == temp.toLowerCase()) {
        return true;
        // numLower++;
    }
    // return numLower;
}

var numLower = 0;
var numUpper = 0;
for (i = 0; i < proGrad_1Len; i++) {
    var temp = proGrad_1.charAt(i);
    if (upperCase(temp) == true) {
        numUpper++
    }
    if (lowerCase(temp) == true) {
        numLower++
    }

}
console.log("Number of upper case characters in drivers are, ", numUpper);
console.log("Number of lower case characters in drivers are, ", numLower);

var numLower = 0;
var numUpper = 0;
for (i = 0; i < proGrad_2Len; i++) {
    temp = proGrad_2.charAt(i);
    if (upperCase(temp) == true) {
        numUpper++
    }
    if (lowerCase(temp) == true) {
        numLower++
    }
}
console.log("Number of upper case characters in navigators are, ", numUpper);
console.log("Number of lower case characters in navigators are, ", numLower);

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"

console.log("All the characters of the driver's name separated by space");
var charSpace = proGrad_1.split("");
var str = "";
for (var index = 0; index < charSpace.length; index++) {
    str += charSpace[index];
    str += " ";
}
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"

var reverse = "";
for (i = proGrad_2Len - 1; i >= 0; i--) {
    reverse += proGrad_2[i];
}
console.log(reverse);

// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"

console.log("The drivers and navigators names in reverse order");
var newStr = proGrad_1 + " " + proGrad_2;
var temp = "";
var rev = newStr.split(" ");
for (var start = res.length - 1; start >= 0; start--) temp += rev[start] + " ";
console.log(temp);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

if (proGrad1[0] < proGrad2[0]) {
    console.log(proGrad1);
} else {
    console.log(proGrad2);
}

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.

var text_1 = "Lorem ipsum dolor sit amet, ne patrioque persecuti mea, ad modus timeam legimus mea, ex aliquip suscipit sea. Te agam ullamcorper nec, sit eu vidisse deseruisse inciderint. Utinam interesset neglegentur per eu, an denique torquatos nec. Mei novum affert labitur cu.Odio oportere ut pri. Invenire constituam vituperatoribus id vim, cu pro rebum modus. Nibh velit neglegentur mea te. Vel eu omnes utamur, alterum aliquid ad sit. Animal tibique consulatu no ius, at libris iuvaret vix.Mel agam tractatos voluptatibus ea, duo ut veri adolescens. Vis ea malis labore. Purto consequat signiferumque vis id, vix eu eros aperiri. Ex tacimates efficiendi eos, te eos zril platonem concludaturque. Feugiat apeirian quaerendum eos in, eripuit torquatos at quo."
var newText = text_1.split(" ");
var numWords = 0;
var et_count = 0;
for (var index = 0; index < newText.length; index++) {
    numWords += 1;
    if (newText[index] == "et") et_count += 1;
}
console.log("Number of words in the string is");
console.log(numWords);
console.log("Number of times latin occured is");
console.log(et_Count);

// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 


var phraseToCheck = "race car";
console.log("Check weather ", phraseToCheck, " is a palindrome or not");
var temp = "";
var temp1 = "";
for (let i = 0; i < phraseToCheck.length; i++) {

    if (phraseToCheck[i] == " " || phraseToCheck[i] == ",") continue;
    else temp += phraseToCheck[i];
}

for (let i = temp.length - 1; i >= 0; i--) {
    temp1 += temp[i];

}

if (temp == temp1) console.log(" Is a palindrome!");
else console.log("Not a palindrome");