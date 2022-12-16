const pos = -3;
let x1 = pos,
    x2 = pos,
    x3 = pos,
    x4 = pos,
    x5 = pos,
    x6 = pos;


const perf = 300;
const nice = 200;
const okay = 100;
const fail = 150;

//CANCION
const music = new Audio('./song_bruno.mp3');
//CANCION


//*ARROWS QUE SE MUEVEN*/
let arrow_left;
let arrow_up;
let arrow_down;
let arrow_right;

let arrow_right_x1;
let arrow_right_x2;
//ARROWS QUE SE MUEVEN*/

let existe_left = false;
let existe_up = false;
let existe_down = false;
let existe_right = false;


//*ARROWS PARA PRESIONAR*/
let apleft;
let apup;
let apdown;
let apright;
//*ARROWS PARA PRESIONAR*/


let screen;


let puntos = 0;

//X1//                                                                    //X2//                                                                    //X3//

let notas =            ["left", "up", "down", "left", "up","down", "right_double",                          ];

let vel_notas =        [2.8, 2.8, 2.8, 2.8, 2.8, 2.8, 2,                                                     ];

let vel_create_notas = [300, 600, 900, 1200, 1500, 1800, 2800,                                               ]; // no funcionara porque el setInterval se repite cada el primer valor que le pongas al inicializar

//--------------------------------------------------PRIMERA ESTROFA--------------------------------------------------//
// let vel_create_notas = [300, 600, 900,1200,1000,1200,1600];

let cont = 0;



window.onload = function () {

    document.addEventListener('keydown', inicializar);

}


function inicializar(event) {
    var keydown = event.key;

    if (keydown == " ") {
        music.play();
        document.removeEventListener("keydown", inicializar);
        document.addEventListener('keydown', arrowHit);
        anadirElemento();
        moverFlechas();
    }

}


function anadirElemento() {

    screen = document.getElementById("screen");

    apleft = document.getElementById("apleft");
    apup = document.getElementById("apup");
    apdown = document.getElementById("apdown");
    apright = document.getElementById("apright");


    setInterval(function () {
        arrow_left = document.querySelector(".aleft");
        arrow_up = document.querySelector(".aup");
        arrow_down = document.querySelector(".adown");
        arrow_right = document.querySelector(".aright");

        //DOBLES
        arrow_right_x1 = document.querySelector(".aright_x1");
        arrow_right_x2 = document.querySelector(".aright_x2");
        //DOBLES

        if (cont < notas.length) {
            switch (notas[cont]) {
                case 'left':
                    alert(existe_left);
                    if (existe_left == false) {
                        let left = document.createElement("div");
                        left.setAttribute("class", "arrow aleft");
                        left.dataset.contador = cont;
                        screen.appendChild(left);
                        existe_left = true;
                    }
                    break;

                case 'up':
                    if (existe_up == false) {
                        let up = document.createElement("div");
                        up.setAttribute("class", "arrow aup");
                        up.dataset.contador = cont;
                        screen.appendChild(up);
                        existe_up = true;
                    }
                    break;

                case 'down':
                    if (existe_down == false) {
                        let down = document.createElement("div");
                        down.setAttribute("class", "arrow adown");
                        down.dataset.contador = cont;
                        screen.appendChild(down);
                        existe_down = true;
                    }
                    break;

                case 'right':
                    if (existe_right == false) {
                        let right = document.createElement("div");
                        right.setAttribute("class", "arrow aright");
                        right.dataset.contador = cont;
                        screen.appendChild(right);
                        existe_right = true;
                    }
                    break;
                
                case 'right_double':
                    let right_x1 = document.createElement("div");
                    right_x1.setAttribute("class", "arrow aright_x1");
                    right_x1.dataset.contador = cont;
                    screen.appendChild(right_x1);

                    let right_x2 = document.createElement("div");
                    right_x2.setAttribute("class", "arrow aright_x2");
                    right_x2.dataset.contador = cont;
                    screen.appendChild(right_x2);
                    break;
            }
            //hacer rightx2 con todas para que caigan 2 veces cada una, cambiar la clase para que una aparezca mas abajo
        }
        cont++;
    }, vel_create_notas[cont]);


}




function moverFlechas() {

    setInterval(function () {


        if (arrow_left != null && existe_left == true) {
            let c = parseInt(arrow_left.dataset.contador);
            x1 = x1 + vel_notas[c];
            arrow_left.style.top = x1 + "px";
            arrowPos(arrow_left, 'left',existe_left);
        }

        if (arrow_up != null && existe_up == true) {
            let c = parseInt(arrow_up.dataset.contador);
            x2 = x2 + vel_notas[c];
            arrow_up.style.top = x2 + "px";
            arrowPos(arrow_up, 'up',existe_up);
        }

        if (arrow_down != null && existe_down == true) {
            let c = parseInt(arrow_down.dataset.contador);
            x3 = x3 + vel_notas[c];
            arrow_down.style.top = x3 + "px";
            arrowPos(arrow_down, 'down',existe_down);
        }

        if (arrow_right != null && existe_right == true) {
            let c = parseInt(arrow_right.dataset.contador);
            x4 = x4 + vel_notas[c];
            arrow_right.style.top = x4 + "px";
            arrowPos(arrow_right, 'right',existe_right);
        }

        if (arrow_right_x1 != null) {
            let c = parseInt(arrow_right_x1.dataset.contador);
            x5 = x5 + vel_notas[c];
            arrow_right_x1.style.top = x5 + "px";
            arrowPos(arrow_right_x1, 'right_x1');
        }

        if (arrow_right_x2 != null) {
            let c = parseInt(arrow_right_x2.dataset.contador);
            x6 = x6 + vel_notas[c];
            arrow_right_x2.style.top = x6 + 150 + "px";
            arrowPos(arrow_right_x2, 'right_x2');
        }

    }, 1);
}

function screenPos() {
    const screen = document.getElementById("screen");

    let screenPos = screen.getBoundingClientRect();

    let screenBottom = screenPos.bottom;

    return screenBottom;
}

function arrowPos(arrows, direction,existe) {
    document.getElementById("puntuacion").innerHTML = puntos;

    let arrow_pos = arrows.getBoundingClientRect();

    let screenBottom = screenPos();

    if (arrow_pos.top + 60 >= screenBottom) {
        if (direction == 'left') {
            existe = false;
            arrow_left.remove();
            x1 = pos;
            puntos = puntos - fail;
        } else if (direction == 'up') {
            arrow_up.remove();
            existe = false;
            x2 = pos;
            puntos = puntos - fail;
        } else if (direction == 'down') {
            arrow_down.remove();
            existe = false;
            x3 = pos;
            puntos = puntos - fail;
        } else if (direction == 'right') {
            arrow_right.remove();
            existe = false;
            x4 = pos;
            puntos = puntos - fail;
        } else if (direction == 'right_x1') {
            arrow_right_x1.remove();
            x5 = pos;
            puntos = puntos - fail;
        } else if (direction == 'right_x2') {
            arrow_right_x2.remove();
            x6 = pos;
            puntos = puntos - fail;
        }
        // arrows.remove();
    }
    return existe;
}





function arrowHit(event) {
    //     event.preventDefault();
    document.getElementById("puntuacion").innerHTML = puntos;

    var keydown = event.key;
    // COMPROBAR QUE EL ARRAY TIENE ALMENOS UNA FLECHA

    //LEFT
    if (arrow_left != null) {
        a_l = arrow_left.getBoundingClientRect();
    }
    b_l = apleft.getBoundingClientRect();
    //LEFT

    //UP
    if (arrow_up != null) {
        a_u = arrow_up.getBoundingClientRect();
    }
    b_u = apup.getBoundingClientRect();
    // //UP

    // //DOWN
    if (arrow_down != null) {
        a_d = arrow_down.getBoundingClientRect();
    }
    b_d = apdown.getBoundingClientRect();
    // //DOWN

    // //RIGHT
    if (arrow_right != null) {
        a_r = arrow_right.getBoundingClientRect();
    }
    b_r = apright.getBoundingClientRect();
    //RIGHT

    //RIGHTX1 && x2
    if (arrow_right_x1 != null) {
        a_rx1 = arrow_right_x1.getBoundingClientRect();
    }
    //RIGHTX1 && x2

    // //RIGHTX2
    if (arrow_right_x2 != null) {
        a_rx2 = arrow_right_x2.getBoundingClientRect();
    }
    //RIGHTX2



    if (keydown == "ArrowLeft" && arrow_left != null) {
        apleft.style.boxShadow = "0px 0px 50px white";
        //   alert(a_l.bottom + " - " + b_l.top);
        if (a_l.bottom >= b_l.top + 0 && a_l.bottom <= b_l.top + 42 && a_l.top <= b_l.bottom) {
            puntos = puntos + okay;
            existe_left = false;
            arrow_left.remove();
            x1 = pos;
        }
        if (a_l.bottom >= b_l.top + 42 && a_l.bottom <= b_l.top + 65 && a_l.top <= b_l.bottom) {
            puntos = puntos + nice;
            existe_left = false;
            arrow_left.remove();
            x1 = pos;
        }
        if (a_l.bottom >= b_l.top + 65 && a_l.bottom <= b_l.bottom && a_l.top <= b_l.bottom) {
            puntos = puntos + perf;
            existe_left = false;
            arrow_left.remove();
            x1 = pos;
        }
    }
    if (keydown == "ArrowUp" && arrow_up != null) {
        apup.style.boxShadow = "0px 0px 50px white";
        if (a_u.bottom >= b_u.top + 0 && a_u.bottom <= b_u.top + 42 && a_u.top <= b_u.bottom) {
            puntos = puntos + okay;
            existe_up = false;
            arrow_up.remove();
            x2 = pos;
        }
        if (a_u.bottom >= b_u.top + 42 && a_u.bottom <= b_u.top + 65 && a_u.top <= b_u.bottom) {
            puntos = puntos + nice;
            existe_up = false;
            arrow_up.remove();
            x2 = pos;
        }
        if (a_u.bottom >= b_u.top + 65 && a_u.bottom <= b_u.bottom && a_u.top <= b_u.bottom) {
            puntos = puntos + perf;
            existe_up = false;
            arrow_up.remove();
            x2 = pos;
        }
    }
    if (keydown == "ArrowDown" && arrow_down != null) {
        apdown.style.boxShadow = "0px 0px 50px white";
        if (a_d.bottom >= b_d.top + 0 && a_d.bottom <= b_d.top + 42 && a_d.top <= b_d.bottom) {
            puntos = puntos + okay;
            arrow_down.remove();
            existe_down = false;
            x3 = pos;
        }
        if (a_d.bottom >= b_d.top + 42 && a_d.bottom <= b_d.top + 65 && a_d.top <= b_d.bottom) {
            puntos = puntos + nice;
            arrow_down.remove();
            existe_down = false;
            x3 = pos;
        }
        if (a_d.bottom >= b_d.top + 65 && a_d.bottom <= b_d.bottom && a_d.top <= b_d.bottom) {
            puntos = puntos + perf;
            arrow_down.remove();
            existe_down = false;
            x3 = pos;
        }
    }
    if (keydown == "ArrowRight" && arrow_right != null) {
        apright.style.boxShadow = "0px 0px 50px white";
        if (a_r.bottom >= b_r.top + 0 && a_r.bottom < b_r.top + 42 && a_r.top <= b_r.bottom) {
            puntos = puntos + okay;
            arrow_right.remove();
            existe_right = false;
            x4 = pos;
        }

        if (a_r.bottom >= b_r.top + 42 && a_r.bottom < b_r.top + 65 && a_r.top <= b_r.bottom) {
            puntos = puntos + nice;
            arrow_right.remove();
            existe_right = false;
            x4 = pos;
        }

        if (a_r.bottom >= b_r.top + 65 && a_r.bottom <= b_r.bottom && a_r.top <= b_r.bottom) {
            puntos = puntos + perf;
            arrow_right.remove();
            existe_right = false;
            x4 = pos;
        }
    }

    if (keydown == "ArrowRight" && arrow_right_x1 != null) {
        apright.style.boxShadow = "0px 0px 50px white";
        if (a_rx1.bottom >= b_r.top + 0 && a_rx1.bottom < b_r.top + 42 && a_rx1.top <= b_r.bottom) {
            puntos = puntos + okay;
            arrow_right_x1.remove();
            x5 = pos;
        }

        if (a_rx1.bottom >= b_r.top + 42 && a_rx1.bottom < b_r.top + 65 && a_rx1.top <= b_r.bottom) {
            puntos = puntos + nice;
            arrow_right_x1.remove();
            x5 = pos;
        }

        if (a_rx1.bottom >= b_r.top + 65 && a_rx1.bottom <= b_r.bottom && a_rx1.top <= b_r.bottom) {
            puntos = puntos + perf;
            arrow_right_x1.remove();
            x5 = pos;
        }
        /////////////////RIGHTX1////////////////////////
    }
    if (keydown == "ArrowRight" && arrow_right_x2 != null) {
        apright.style.boxShadow = "0px 0px 50px white";
        /////////////////RIGHTX2////////////////////////
        if (a_rx2.bottom >= b_r.top + 0 && a_rx2.bottom < b_r.top + 42 && a_rx2.top <= b_r.bottom) {
            puntos = puntos + okay;
            arrow_right_x2.remove();
            x6 = pos;
        }

        if (a_rx2.bottom >= b_r.top + 42 && a_rx2.bottom < b_r.top + 65 && a_rx2.top <= b_r.bottom) {
            puntos = puntos + nice;
            arrow_right_x2.remove();
            x6 = pos;
        }

        if (a_rx2.bottom >= b_r.top + 65 && a_rx2.bottom <= b_r.bottom && a_rx2.top <= b_r.bottom) {
            puntos = puntos + perf;
            arrow_right_x2.remove();
            x6 = pos;
        }
        /////////////////RIGHTX2////////////////////////
    }
    return [existe_left, existe_up, existe_down, existe_right];
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