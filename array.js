let fruits=["apple","banana","orange","grape"];

console.log(fruits[0]);
console.log(fruits[2]);

//adding element to the end
fruits.push("kiwi");
console.log(fruits);

//adding elemt to the beginning
fruits.unshift("mango");
console.log(fruits);

//finding index of an element
let indexOforange=fruits.indexOf("orange")
console.log(indexOforange);

//iterating using a for loop
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}


//splicing an array(modifying orange array)
let removed=fruits.splice(1,2,"pear","melon");

//concantaenatingarrays
let morefruits=["grapefruit","pineapple"];
let allfruits=fruits.concat(morefruits);
console.log(morefruits);
console.log(allfruits);