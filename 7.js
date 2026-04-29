// 7 In an array of objects filter out those objects which have gender's value male.

let arr = [
    {
        name: 'Amit',
        age: 19,
        gender:"Male"
    },
    {
        name: 'John',
        age: 22,
        gender:"Female"
    },
    {
        name: 'Rishi',
        age: 18,
        gender:"Male"
    },
    {
        name: 'Sonu',
        age: 30,
        gender:"Female"
    },
    {
        name: 'Rishabh',
        age: 55,
        gender:"Male"
    }
]

// new_arr = arr.filter((person) => {
//     return person.gender == "Male"
// })

new_arr = arr.filter((person) => {
    if(person.gender == "Male"){
        return person
    }
})

console.log(new_arr)
