// 8 Given an array of strings, return a new array where all strings are in uppercase.

let arr = ["Amit", "Saurabh", "Rohit", "Rahul", "Amit", "Saurabh"];


new_arr = arr.map((Element)=> {
    return Element.toUpperCase();
})

console.log(new_arr);
