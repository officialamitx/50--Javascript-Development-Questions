// 4 Create a function that takes an array containing both numbers and strings, and returns a new array containing only the string values.

let arr = [22,33,44,"Amit","Sanjay","Rohit",11,55,77]


new_arr = arr.filter(
    (Element)=>{
        if(typeof Element == "string"){
            return Element
        }
    }
)

// console.log(new_arr)
