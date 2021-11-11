//Expand / collapse menu on mouseover

document.querySelector("#hamburger").addEventListener('mouseover', function(){
    document.querySelector("#ulMenu").className="menu-expanded"
})

const collapseMenu= function (){
    document.querySelector("#ulMenu").className="menu-collapsed"
}

document.querySelector("#menuSection").addEventListener('mouseleave', function(){
    collapseMenu();
})
    


// Change background-color & text  on menu-item click

const changeBackground = function (selectedColor){
    document.querySelector("body").style.backgroundColor= selectedColor;
}

const addText = function(selectedColor){
    document.querySelector('#colorText').textContent = selectedColor;
}

document.querySelector("#liRood").addEventListener('click',function(){
    let selectedColor = "red"
    changeBackground(selectedColor);
    addText(selectedColor);
    collapseMenu();
})

document.querySelector("#liBlauw").addEventListener('click',function(){
    let selectedColor = "blue"    
    changeBackground(selectedColor);
    addText(selectedColor);
    collapseMenu();
})

document.querySelector("#liGroen").addEventListener('click',function(){
    let selectedColor = "green"
    changeBackground(selectedColor);
    addText(selectedColor);
    collapseMenu();
})

document.querySelector("#liGeel").addEventListener('click',function(){
    let selectedColor = "yellow"
    changeBackground(selectedColor);
    addText(selectedColor);
    collapseMenu();
})

document.querySelector("#liPaars").addEventListener('click',function(){
    let selectedColor = "purple"
    changeBackground(selectedColor);
    addText(selectedColor);
    collapseMenu();
})