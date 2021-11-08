// const Checkvalue = function(number){
//     if(number>100){return true}
//     else {return false};
// };

// const value= Checkvalue(50);

// console.log(value);


// const Brenda = function(maxPeople, currentPeople, age){
//    if(age<18) {return "This is a club for adults"}
//    else  if(currentPeople=>maxPeople){return "it's too busy now, come back later"}
//    else {return "Come in!"};
// }


// const message = Brenda(100,100,35)
// console.log(message)


const Average = function([numbers]){
    const result= numbers.reduce((total,n)=>total + n)/numbers.length
    return result
};

const input=[5,10,5,10,5]
const outcome = Average([input]);
console.log(outcome);
