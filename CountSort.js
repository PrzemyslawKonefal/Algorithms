//COUNTINGSORT
 
$(document).ready(function init(){
 
//////////////////
// COUNTINGSORT //
//////////////////
 
function CountingSort(myTable) {
//count elements
var countTable = [];
for(var i=0; i<myTable.length; i++) {
if (countTable[myTable[i]] === undefined) {
countTable[myTable[i]] = 1;
} else {
countTable[myTable[i]]++;              
}
}

//generate sorted table based on counted elements
var sortedTable = [];      
for(var j=0; j<countTable.length; j++) {
if (countTable[j] !== undefined) {
for(var k=1; k<=countTable[j]; k++) {
sortedTable.push(j);
}
}
}
return sortedTable;
}
 
//////////
// TEST //
//////////
 
function getRandom(min,max) {
var myRandom = max+1;
while (myRandom > max) {
myRandom = parseInt(Math.random()*(max-min+1) + min);
}
return myRandom;
}
function GenerateTable(min,max,length) {
var myTable = [];
for(var i=0; i<length; i++) {
myTable.push(getRandom(min,max));
}
return myTable;
}
 
var tableBefore = GenerateTable(0,9,10);
console.log(tableBefore);
var tableAfter = CountingSort(tableBefore);
console.log(tableAfter);
 
 
});
