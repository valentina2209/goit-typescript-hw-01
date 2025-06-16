// Create a variable that can hold either a string or a number (union type)? 

let mixedType: number | string | boolean;

mixedType = 20;
mixedType = "Jon"
mixedType = true;


// Also, declare a variable that can hold only one of two possible string values: 
// 'enable' or 'disable' (literal type).

type EnableOrDisable = "enable" | "disable";
let answer: EnableOrDisable ;
answer = "enable";
answer = "disable";