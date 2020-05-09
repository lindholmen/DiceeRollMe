document.body.onload = function(){
    generateRandomDicee(true);
    document.getElementsByClassName("btn")[0].addEventListener("click", function(){
        document.getElementsByClassName("btn")[0].classList.add("outlinenone");
        generateRandomDicee(false);
    });
}


function generateRandomDicee(firsttime){
    var number = Math.floor(Math.random() * 6+1)
    var number2 = Math.floor(Math.random() * 6+1)
    while (firsttime && (number===number2)){
        number = Math.floor(Math.random() * 6+1)
    }
    var new_src = "images/dice" + number + ".png";
    var new_src2 = "images/dice" + number2 + ".png";
    document.getElementsByClassName("img1")[0].setAttribute("src",new_src);
    document.getElementsByClassName("img2")[0].setAttribute("src",new_src2);
    if (number === number2){
        document.querySelector("footer").classList.add("lucky");
        document.querySelector("footer").innerText = " \"Or maybe God does.\" - Albert Einstein";
    }
    else{
        document.querySelector("footer").classList.remove("lucky");
        document.querySelector("footer").innerText = " \"God Doesn't Play Dice.\" - Albert Einstein"
    }
}