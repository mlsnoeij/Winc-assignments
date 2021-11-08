const colors = ["yellow", "blue","red","orange"];

// let i = 0

// while (i< colors.length){
// console.log(colors[i])
// i++
// }


// for (i=0; i < colors.length; i++){
//     console.log(colors[i])
// }


// colors.forEach(element => {
//     console.log(element)
    
// });


let Person = {
    age: 39, 
    name: "Marieke",
    city: "Assendelft",
    likesDropjes: true,
    hobby: "sing",
}

for (const property in Person){
    console.log(property +":"+ Person[property])
    }