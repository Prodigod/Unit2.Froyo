


let froyoResult = prompt(
    "Enter a list of comma-separated froyo flavors",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee");

 //prompt userInput to create indexes.
 
 
    //store the user input into an array, convert to string array with split and comma.
    //then print the indexes to console.
let froyoArray = froyoResult.split(",");   
console.log(froyoArray);  


function printFlavors(output) {
console.log(output)
    
}



function observed(froyoArray) {
let countFlavors = {};
for (let i = 0; i < froyoArray.length; i++) {
   let flavor = froyoArray[i]
    if (flavor in countFlavors) {
        countFlavors[flavor]++
     } else {
     countFlavors[flavor] = 1;
}

}
return countFlavors;
}

const output = observed(froyoArray);
printFlavors(output);







