const pos = -3;
let x1= pos,x2= pos,x3= pos,x4 = pos;
const perf = 300;
const nice = 200;
const okay = 100;
const fail = 300;
//*ARROWS QUE SE MUEVEN*/
let arrow_left;
let arrow_up;
let arrow_down;
let arrow_right;
//*ARROWS QUE SE MUEVEN*/


//*ARROWS PARA PRESIONAR*/
let apleft;
let apup;
let apdown;
let apright;
//*ARROWS PARA PRESIONAR*/


let screen;


let puntos = 0;


window.onload = function () {
    anadirElemento();
    moverFlechas();  
    screenPos();
}

function anadirElemento() {
    screen = document.getElementById("screen");
    
    
    left = document.createElement("div");
    left.setAttribute("class", "arrow aleft");
    screen.appendChild(left);

    up = document.createElement("div");
    up.setAttribute("class", "arrow aup");
    screen.appendChild(up);
    
    down = document.createElement("div");
    down.setAttribute("class", "arrow adown");
    screen.appendChild(down);

    right = document.createElement("div");
    right.setAttribute("class", "arrow aright");
    screen.appendChild(right);
}

//Cambiar velocidades a random
function moverFlechas() {
    arrow_left = document.querySelector(".aleft");
    arrow_up = document.querySelector(".aup");
    arrow_down = document.querySelector(".adown");
    arrow_right = document.querySelector(".aright");


    apleft = document.getElementById("apleft");
    apup = document.getElementById("apup");
    apdown = document.getElementById("apdown");
    apright = document.getElementById("apright");


    setInterval(function () {
        x1++;
        arrow_left.style.top = x1 + "px";
        arrowPos(arrow_left);

        x2++;
        arrow_up.style.top = x2 + "px";
        arrowPos(arrow_up);

        x3++;
        arrow_down.style.top = x3 + "px";
        arrowPos(arrow_down);

        x4++;
        arrow_right.style.top = x4 + "px";
        arrowPos(arrow_right);
    }, 2);
}

function screenPos() {
    const screen = document.getElementById("screen");

    let screenPos = screen.getBoundingClientRect();

    let screenBottom = screenPos.bottom;


    return screenBottom;
}

function arrowPos(arrows) {
    document.getElementById("puntuacion").innerHTML = puntos; 
          
    let arrow_pos = arrows.getBoundingClientRect();

    let arrow_final_pos = arrow_pos.top;
    let screenBottom = screenPos();

    if (arrow_pos.top >= screenBottom) {
        arrows.remove();
        puntos = puntos - fail;
    }
    console.log(arrow_final_pos);
}


document.addEventListener('keydown', (event) => {

    document.getElementById("puntuacion").innerHTML = puntos; 

    var keydown = event.key;

    //LEFT
    a_l = arrow_left.getBoundingClientRect();
    b_l = apleft.getBoundingClientRect();
    //LEFT

    //UP
    a_u = arrow_up.getBoundingClientRect();
    b_u = apup.getBoundingClientRect();
    //UP

    //DOWN
    a_d = arrow_down.getBoundingClientRect();
    b_d = apdown.getBoundingClientRect();
    //DOWN

    //RIGHT
    a_r = arrow_right.getBoundingClientRect();
    b_r = apright.getBoundingClientRect();
    //RIGHT

    //PARTIR EN 3 LOS AP(DIRECCION) PARA HACER 3 PUNTUACION OKAY,NICE,PERF+
    //optimizar codigo de teclas modo plantilla como arrowpos
    let opcion = false;
    if (keydown == "ArrowLeft") {
        apleft.style.boxShadow = "0px 0px 50px white";
        if (a_l.bottom >= b_l.top + 0 && a_l.bottom <= b_l.top + 42 && a_l.top <= b_l.bottom ) {
            puntos = puntos + okay;
            //alert("100")
            arrow_left.remove();
            //opcion = true;
        } if (a_l.bottom >= b_l.top+42 && a_l.bottom <= b_l.top + 65 && a_l.top <= b_l.bottom ){
            puntos = puntos + nice;
            //alert("200")
            arrow_left.remove(); 
            //opcion = true;
        }if (a_l.bottom >= b_l.top+65 && a_l.bottom <= b_l.bottom && a_l.top <= b_l.bottom){
            puntos = puntos + perf;
            //alert("300")
            arrow_left.remove(); 
            //opcion = true;
        }
    }
    if (keydown == "ArrowUp") {
        apup.style.boxShadow = "0px 0px 50px white";
        if (a_u.bottom >= b_u.top + 0 && a_u.bottom <= b_u.top + 42 && a_u.top <= b_u.bottom ) {
            puntos = puntos + okay;
            //alert("100")
            arrow_up.remove();
            //opcion = true;
        } if (a_u.bottom >= b_u.top+42 && a_u.bottom <= b_u.top + 65 && a_u.top <= b_u.bottom ){
            puntos = puntos + nice;
            //alert("200")
            arrow_up.remove(); 
            //opcion = true;
        }if (a_u.bottom >= b_u.top+ 65 && a_u.bottom <= b_u.bottom && a_u.top <= b_u.bottom ){
            puntos = puntos + perf;
            //alert("300")
            arrow_up.remove(); 
            //opcion = true;
        }
    }
    if (keydown == "ArrowDown") {
        apdown.style.boxShadow = "0px 0px 50px white";
        if (a_d.bottom >= b_d.top + 0 && a_d.bottom <= b_d.top + 42 && a_d.top <= b_d.bottom ) {
            puntos = puntos + okay;
            //alert("100")
            arrow_down.remove();
            //opcion = true;
        } if (a_d.bottom >= b_d.top+42 && a_d.bottom <= b_d.top + 65 && a_d.top <= b_d.bottom ){
            puntos = puntos + nice;
            //alert("200")
            arrow_down.remove(); 
            //opcion = true;
        }if (a_d.bottom >= b_d.top+ 65 && a_d.bottom <= b_d.bottom && a_d.top <= b_d.bottom ){
            puntos = puntos + perf;
            //alert("300")
            arrow_down.remove(); 
            //opcion = true;
        }
    }
    if (keydown == "ArrowRight") {
        apright.style.boxShadow = "0px 0px 50px white";
        if (a_r.bottom >= b_r.top + 0 && a_r.bottom < b_r.top + 42 && a_r.top <= b_r.bottom ) {
            puntos = puntos + okay;
            //alert("100")
            arrow_right.remove();
            //opcion = true;
        }
        
        if (a_r.bottom >= b_r.top + 42 && a_r.bottom < b_r.top + 65 && a_r.top <= b_r.bottom) {
            puntos = puntos + nice;
            //alert("200")
            arrow_right.remove(); 
            //opcion = true;
        }
        
        if (a_r.bottom >= b_r.top + 65  && a_r.bottom <= b_r.bottom && a_r.top <= b_r.bottom) {
            puntos = puntos + perf;
            //alert("300")
            arrow_right.remove(); 
            //opcion = true;
        }
    }
});

document.addEventListener('keyup', (event) => {

    var keyup = event.key;

    if (keyup == "ArrowLeft") {
        apleft.style.boxShadow = "0px 0px 0px ";
    }
    if (keyup == "ArrowUp") {
        apup.style.boxShadow = "0px 0px 0px ";
    }
    if (keyup == "ArrowDown") {
        apdown.style.boxShadow = "0px 0px 0px ";
    }
    if (keyup == "ArrowRight") {
        apright.style.boxShadow = "0px 0px 0px ";
    }
});


