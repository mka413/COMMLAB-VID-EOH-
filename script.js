let skateClicked = document.getElementById("skate");

skateClicked.addEventListener("click", ()=>{
    if(document.getElementById("skate_m").style.display == "none")
        document.getElementById("skate_m").style.display = "block";
    else
        document.getElementById("skate_m").style.display = "none";
})

let violClicked = document.getElementById("viol");

violClicked.addEventListener("click", ()=>{
    if(document.getElementById("viol_m").style.display == "none")
        document.getElementById("viol_m").style.display = "block";
    else
        document.getElementById("viol_m").style.display = "none";
})

let guitClicked = document.getElementById("guit");

guitClicked.addEventListener("click", ()=>{
    if(document.getElementById("guit_m").style.display == "none")
        document.getElementById("guit_m").style.display = "block";
    else
        document.getElementById("guit_m").style.display = "none";
})

var background = document.getElementById("background");

let blp1Clicked = document.getElementById("slate1");

blp1Clicked.addEventListener("click",()=>{
    if(document.getElementById("blp1").style.display == "none"){
        document.getElementById("blp1").style.display = "flex";
        background.style.webkitFilter = "blur(3px)";
    }
    else
        document.getElementById("blp1").style.display = "none";
})

let blp2Clicked = document.getElementById("slate2");

blp2Clicked.addEventListener("click",()=>{
    if(document.getElementById("blp2").style.display == "none"){
        document.getElementById("blp2").style.display = "flex";
        background.style.webkitFilter = "blur(3px)";
    }
    else
        document.getElementById("blp2").style.display = "none";
})

let blp3Clicked = document.getElementById("slate3");

blp3Clicked.addEventListener("click",()=>{
    if(document.getElementById("blp3").style.display == "none"){
        document.getElementById("blp3").style.display = "flex";
        background.style.webkitFilter = "blur(3px)";
    }
    else
        document.getElementById("blp3").style.display = "none";
})

let close1Clicked = document.getElementById("close1");
let close2Clicked = document.getElementById("close2");
let close3Clicked = document.getElementById("close3");

close1Clicked.addEventListener("click",()=>{
    if(document.getElementById("blp1").style.display == "flex"){
        document.getElementById("blp1").style.display = "none";
        background.style.webkitFilter = "blur(0px)";
    }
})

close2Clicked.addEventListener("click",()=>{
    if(document.getElementById("blp2").style.display == "flex"){
        document.getElementById("blp2").style.display = "none";
        background.style.webkitFilter = "blur(0px)";
    }
})

close3Clicked.addEventListener("click",()=>{
    if(document.getElementById("blp3").style.display == "flex"){
        document.getElementById("blp3").style.display = "none";
        background.style.webkitFilter = "blur(0px)";
    }
})
