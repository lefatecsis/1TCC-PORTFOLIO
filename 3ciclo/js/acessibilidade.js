//................Menu topnav...............
function myFunction() {
	
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }

}
//.............Aumentar fonte................
function fonte(e){
    var elemento = $(".acessibilidade");
    var fonte = elemento.css('font-size');
    if (e == 'a') {
        elemento.css("fontSize", parseInt(fonte) + 1);
    } else if(e == 'd'){
        elemento.css("fontSize", parseInt(fonte) - 1);
    }else if ('n'){
    	elemento.css("fontSize", 16);
    }
}

// ..................Slider.........................
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 5000); // Change image every 5 seconds
}
//...............Menu como reciclar...........................
function materia1() {
document.getElementById("materia0").style.display = "none";
document.getElementById("materia1").style.display = "block";
document.getElementById("materia2").style.display = "none";
document.getElementById("materia3").style.display = "none";
document.getElementById("materia4").style.display = "none";
document.getElementById("materia5").style.display = "none";
document.getElementById("materia6").style.display = "none";
document.getElementById("materia7").style.display = "none";
document.getElementById("materia8").style.display = "none";
document.getElementById("materia9").style.display = "none";
}

function materia2() {
document.getElementById("materia0").style.display = "none";
document.getElementById("materia1").style.display = "none";
document.getElementById("materia2").style.display = "block";
document.getElementById("materia3").style.display = "none";
document.getElementById("materia4").style.display = "none";
document.getElementById("materia5").style.display = "none";
document.getElementById("materia6").style.display = "none";
document.getElementById("materia7").style.display = "none";
document.getElementById("materia8").style.display = "none";
document.getElementById("materia9").style.display = "none";
}
function materia3() {
document.getElementById("materia0").style.display = "none";
document.getElementById("materia1").style.display = "none";
document.getElementById("materia2").style.display = "none";
document.getElementById("materia3").style.display = "block";
document.getElementById("materia4").style.display = "none";
document.getElementById("materia5").style.display = "none";
document.getElementById("materia6").style.display = "none";
document.getElementById("materia7").style.display = "none";
document.getElementById("materia8").style.display = "none";
document.getElementById("materia9").style.display = "none";
}
function materia4() {
document.getElementById("materia0").style.display = "none";
document.getElementById("materia1").style.display = "none";
document.getElementById("materia2").style.display = "none";
document.getElementById("materia3").style.display = "none";
document.getElementById("materia4").style.display = "block";
document.getElementById("materia5").style.display = "none";
document.getElementById("materia6").style.display = "none";
document.getElementById("materia7").style.display = "none";
document.getElementById("materia8").style.display = "none";
document.getElementById("materia9").style.display = "none";
}
function materia5() {
document.getElementById("materia0").style.display = "none";
document.getElementById("materia1").style.display = "none";
document.getElementById("materia2").style.display = "none";
document.getElementById("materia3").style.display = "none";
document.getElementById("materia4").style.display = "none";
document.getElementById("materia5").style.display = "block";
document.getElementById("materia6").style.display = "none";
document.getElementById("materia7").style.display = "none";
document.getElementById("materia8").style.display = "none";
document.getElementById("materia9").style.display = "none";
}
function materia6() {
document.getElementById("materia0").style.display = "none";
document.getElementById("materia1").style.display = "none";
document.getElementById("materia2").style.display = "none";
document.getElementById("materia3").style.display = "none";
document.getElementById("materia4").style.display = "none";
document.getElementById("materia5").style.display = "none";
document.getElementById("materia6").style.display = "block";
document.getElementById("materia7").style.display = "none";
document.getElementById("materia8").style.display = "none";
document.getElementById("materia9").style.display = "none";
}
function materia7() {
document.getElementById("materia0").style.display = "none";
document.getElementById("materia1").style.display = "none";
document.getElementById("materia2").style.display = "none";
document.getElementById("materia3").style.display = "none";
document.getElementById("materia4").style.display = "none";
document.getElementById("materia5").style.display = "none";
document.getElementById("materia6").style.display = "none";
document.getElementById("materia7").style.display = "block";
document.getElementById("materia8").style.display = "none";
document.getElementById("materia9").style.display = "none";
}
function materia8() {
document.getElementById("materia0").style.display = "none";
document.getElementById("materia1").style.display = "none";
document.getElementById("materia2").style.display = "none";
document.getElementById("materia3").style.display = "none";
document.getElementById("materia4").style.display = "none";
document.getElementById("materia5").style.display = "none";
document.getElementById("materia6").style.display = "none";
document.getElementById("materia7").style.display = "none";
document.getElementById("materia8").style.display = "block";
document.getElementById("materia9").style.display = "none";
}
function materia9() {
document.getElementById("materia0").style.display = "none";
document.getElementById("materia1").style.display = "none";
document.getElementById("materia2").style.display = "none";
document.getElementById("materia3").style.display = "none";
document.getElementById("materia4").style.display = "none";
document.getElementById("materia5").style.display = "none";
document.getElementById("materia6").style.display = "none";
document.getElementById("materia7").style.display = "none";
document.getElementById("materia8").style.display = "none";
document.getElementById("materia9").style.display = "block";
}






