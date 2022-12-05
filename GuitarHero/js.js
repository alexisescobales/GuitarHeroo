const pos = -3;
let x1 = pos,
    x2 = pos,
    x3 = pos,
    x4 = pos;


const perf = 300;
const nice = 200;
const okay = 100;
const fail = 300;

let id = 1;

let existe_left = false;
let existe_up = false;
let existe_down = false;
let existe_right = false;

//*ARROWS QUE SE MUEVEN*/
let arrow_left;
let arrow_up;
let arrow_down;
let arrow_right;
//ARROWS QUE SE MUEVEN*/


//*ARROWS PARA PRESIONAR*/
let apleft;
let apup;
let apdown;
let apright;
//*ARROWS PARA PRESIONAR*/


let screen;


let puntos = 0;



//     anadirElemento();
//     moverFlechas();
//     screenPos();
// }

window.onload = function () {

    document.addEventListener('keydown', inicializar);

}


function inicializar(event) {
    var keydown = event.key;

    if (keydown == " ") {
        document.removeEventListener("keydown", inicializar);
        document.addEventListener('keydown', arrowHit);
        anadirElemento();
        moverFlechas();
        // screenPos(); 
    }

}


function anadirElemento() {

    screen = document.getElementById("screen");

    // crear los divs aleatoriamente por un set setInterval
    // tendre que utilizar el queryselectorAll para cojer todas las feclhas
    // poner aleatoriamente tmb las velocidades de los divs


    setInterval(function () {

        var random = Math.round(Math.random() * 4);

        if (random == 0 && existe_left == false) {
            left = document.createElement("div");
            left.setAttribute("class", "arrow aleft");
            left.setAttribute("id", id);
            screen.appendChild(left);
            id++;
            existe_left = true;
        } else if (random == 1 && existe_up == false) {
            let up = document.createElement("div");
            up.setAttribute("class", "arrow aup");
            up.setAttribute("id", id);
            screen.appendChild(up);
            id++;
            existe_up = true;
        } else if (random == 2 && existe_down == false) {
            let down = document.createElement("div");
            down.setAttribute("class", "arrow adown");
            down.setAttribute("id", id);
            screen.appendChild(down);
            id++;
            existe_down = true;
        } else if (random == 3 && existe_right == false) {
            let right = document.createElement("div");
            right.setAttribute("class", "arrow aright");
            right.setAttribute("id", id);
            screen.appendChild(right);
            id++;
            existe_right = true;
        }
    }, 100);




}

//Cambiar velocidades a random
function moverFlechas() {
    apleft = document.getElementById("apleft");
    apup = document.getElementById("apup");
    apdown = document.getElementById("apdown");
    apright = document.getElementById("apright");




    setInterval(function () {


        arrow_left = document.querySelectorAll(".aleft");
        arrow_up = document.querySelectorAll(".aup");
        arrow_down = document.querySelectorAll(".adown");
        arrow_right = document.querySelectorAll(".aright");



        if (arrow_left.length != 0 && existe_left == true) {
            x1++;
            arrow_left[0].style.top = x1 + "px";
            arrowPos(arrow_left[0]);
        }

        if (arrow_up.length != 0 && existe_up == true) {
            x2++;
            arrow_up[0].style.top = x2 + "px";
            arrowPos(arrow_up[0]);
        }

        if (arrow_down.length != 0 && existe_down == true) {
            x3++;
            arrow_down[0].style.top = x3 + "px";
            arrowPos(arrow_down[0]);
        }

        if (arrow_right.length != 0 && existe_right == true) {
            x4++;
            arrow_right[0].style.top = x4 + "px";
            arrowPos(arrow_right[0]);
        }

    }, );
}

function screenPos() {
    const screen = document.getElementById("screen");

    let screenPos = screen.getBoundingClientRect();

    let screenBottom = screenPos.bottom;

    return screenBottom;
}

function arrowPos(arrows) {
    document.getElementById("puntuacion").innerHTML = puntos;
    console.log(arrows);

    let arrow_pos = arrows.getBoundingClientRect();

    let screenBottom = screenPos();

    if (arrow_pos.top + 60 >= screenBottom) {
        if (arrows == arrow_left[0]) {
            arrow_left[0].remove();
            x1 = pos;
            existe_left = false;
            puntos = puntos - fail;
        } else if (arrows == arrow_up[0]) {
            arrow_up[0].remove();
            x2 = pos;
            existe_up = false;
            puntos = puntos - fail;
        } else if (arrows == arrow_down[0]) {
            arrow_down[0].remove();
            x3 = pos;
            existe_down = false;
            puntos = puntos - fail;
        } else if (arrows == arrow_right[0]) {
            arrow_right[0].remove();
            x4 = pos;
            existe_right = false;
            puntos = puntos - fail;
        }
        // arrows.remove();
    }
}



function arrowHit(event) {
    //     event.preventDefault();
    document.getElementById("puntuacion").innerHTML = puntos;

    var keydown = event.key;
    // COMPROBAR QUE EL ARRAY TIENE ALMENOS UNA FLECHA

    //LEFT
    if (arrow_left.length != 0) {
        a_l = arrow_left[0].getBoundingClientRect();
    }
    b_l = apleft.getBoundingClientRect();
    //LEFT

    //UP
    if (arrow_up.length != 0) {
        a_u = arrow_up[0].getBoundingClientRect();
    }
    b_u = apup.getBoundingClientRect();
    // //UP

    // //DOWN
    if (arrow_up.length != 0) { 
        a_d = arrow_down[0].getBoundingClientRect();
    }
    b_d = apdown.getBoundingClientRect();
    // //DOWN

    // //RIGHT
    if (arrow_up.length != 0) { 
        a_r = arrow_right[0].getBoundingClientRect();
    }
    b_r = apright.getBoundingClientRect();
    //RIGHT

    if (keydown == "ArrowLeft") {
        apleft.style.boxShadow = "0px 0px 50px white";
        //   alert(a_l.bottom + " - " + b_l.top);
        if (a_l.bottom >= b_l.top + 0 && a_l.bottom <= b_l.top + 42 && a_l.top <= b_l.bottom) {
            puntos = puntos + okay;
            arrow_left[0].remove();
            existe_left = false;
            x1 = pos;
        }
        if (a_l.bottom >= b_l.top + 42 && a_l.bottom <= b_l.top + 65 && a_l.top <= b_l.bottom) {
            puntos = puntos + nice;
            arrow_left[0].remove();
            existe_left = false;
            x1 = pos;
        }
        if (a_l.bottom >= b_l.top + 65 && a_l.bottom <= b_l.bottom && a_l.top <= b_l.bottom) {
            puntos = puntos + perf;
            arrow_left[0].remove();
            existe_left = false;
            x1 = pos;
        }
    }
    if (keydown == "ArrowUp") {
        apup.style.boxShadow = "0px 0px 50px white";
        if (a_u.bottom >= b_u.top + 0 && a_u.bottom <= b_u.top + 42 && a_u.top <= b_u.bottom) {
            puntos = puntos + okay;
            arrow_up[0].remove();
            existe_up = false;
            x2 = pos;
        }
        if (a_u.bottom >= b_u.top + 42 && a_u.bottom <= b_u.top + 65 && a_u.top <= b_u.bottom) {
            puntos = puntos + nice;
            arrow_up[0].remove();
            existe_up = false;
            x2 = pos;
        }
        if (a_u.bottom >= b_u.top + 65 && a_u.bottom <= b_u.bottom && a_u.top <= b_u.bottom) {
            puntos = puntos + perf;
            arrow_up[0].remove();
            existe_up = false;
            x2 = pos;
        }
    }
    if (keydown == "ArrowDown") {
        apdown.style.boxShadow = "0px 0px 50px white";
        if (a_d.bottom >= b_d.top + 0 && a_d.bottom <= b_d.top + 42 && a_d.top <= b_d.bottom) {
            puntos = puntos + okay;
            arrow_down[0].remove();
            existe_down = false;
            x3 = pos;
        }
        if (a_d.bottom >= b_d.top + 42 && a_d.bottom <= b_d.top + 65 && a_d.top <= b_d.bottom) {
            puntos = puntos + nice;
            arrow_down[0].remove();
            existe_down = false;
            x3 = pos;
        }
        if (a_d.bottom >= b_d.top + 65 && a_d.bottom <= b_d.bottom && a_d.top <= b_d.bottom) {
            puntos = puntos + perf;
            arrow_down[0].remove();
            existe_down = false;
            x3 = pos;
        }
    }
    if (keydown == "ArrowRight") {
        apright.style.boxShadow = "0px 0px 50px white";
        if (a_r.bottom >= b_r.top + 0 && a_r.bottom < b_r.top + 42 && a_r.top <= b_r.bottom) {
            puntos = puntos + okay;
            arrow_right[0].remove();
            existe_right = false;
            x4 = pos;
        }

        if (a_r.bottom >= b_r.top + 42 && a_r.bottom < b_r.top + 65 && a_r.top <= b_r.bottom) {
            puntos = puntos + nice;
            arrow_right[0].remove();
            existe_right = false;
            x4 = pos;
        }

        if (a_r.bottom >= b_r.top + 65 && a_r.bottom <= b_r.bottom && a_r.top <= b_r.bottom) {
            puntos = puntos + perf;
            arrow_right[0].remove();
            existe_right = false;
            x4 = pos;
        }
    }
}

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