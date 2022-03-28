/* dark mode on/off */
function dark(){
    var target1 = document.body;
    var target2 = document.getElementsByTagName("button");
    if(target1.classList.toggle("dark-mode")){
        document.getElementById("dark").src = "./img/moon.png";
        document.getElementById("dark").style.filter = "invert(100%)"
    }
    else{
        document.getElementById("dark").src = "./img/sun.png";
        document.getElementById("dark").style.filter = "invert(0%)"
    }

}

/*
*   onclick  
*   change img, background-color
*/