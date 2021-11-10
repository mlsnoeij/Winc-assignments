const buttonClick = document.getElementById('mybutton')

buttonClick.addEventListener('click', function () {
    alert("button clicked");
})

const buttonClick2 = document.getElementById('backgroundbutton')
const body = document.querySelector('body')

console.log(body)

buttonClick2.addEventListener('click', function(){
    body.classList.toggle("red-background");
})