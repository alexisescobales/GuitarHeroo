const pos = 35;
let x1,x2,x3,x4 = pos;




let arrow_left;
let arrow_up;
let arrow_down;
let arrow_right;
let screen;

window.onload = function () {
    screenPos();
    anadirElemento();
    moverFlechas();
    
}
//poner oculto en css
//controlar colisiones a 100px de diferencia

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

    return left;
}
//Cambiar velocidades a random
function moverFlechas() {

    //Cambiar a clases y no id
    arrow_left = document.getElementsByClassName("arrow aleft");
    arrow_up = document.getElementById("fila2");
    arrow_down = document.getElementById("fila3");
    arrow_right = document.getElementById("fila4");
    setInterval(function () {
        x1++;
        arrow_left.style.top = x1 + "px";
        //arrowPos(arrow_left);
        //x2++;
        //arrow_up.style.top = x2 + "px";
        //arrowPos(arrow_up);
        //x3++;
        //arrow_down.style.top = x3 + "px";
        //arrowPos(arrow_down);
        //x4++;
        //arrow_right.style.top = x4 + "px";
        //arrowPos(arrow_right);

    }, 5);
}

      function screenPos() {
        const screen = document.getElementById("screen");

        let screenPos = screen.getBoundingClientRect();

        let screenBottom = screenPos.bottom;

        console.log(screenBottom);

        return screenBottom;
      }

      function arrowPos(arrows) {

        let arrow_pos = arrows.getBoundingClientRect();

          let arrow_final_pos = arrow_pos.top;
          let screenBottom = screenPos();

          if (arrow_pos.top >= screenBottom) {
              arrows.style = 'none';
          }
      }





