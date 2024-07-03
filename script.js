/*Definição das variáveis*/
const color = document.querySelector('input');
const brush = document.querySelector('select');
let screen = document.querySelector('canvas');
let defaultColor = 'black';
let defaultSize = 1;
let canDraw = false;
let mouseX = 0;
let mouseY = 0;1
let ctx = screen.getContext('2d');


/*Definição dos valores com base naqueles retirados do input e do select no HTML*/
color.onchange = () => defaultColor = color.value;
brush.onchange = () => defaultSize = brush.value;

/* Definição das função ao apertar o botão do mouse, solta-lo, e movê-lo */
screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);

/* Função que desenha ao apertar o botão do mouse */
function mouseDownEvent(e) {
    canDraw = true;
    mouseX = e.pageX - screen.offsetLeft;
    mouseY = e.pageY - screen.offsetTop;
}

/* Função que detecta a movimentação do cursor */
function mouseMoveEvent(e){
    if(canDraw){
        draw(e.pageX, e.pageY);
    }
}

/* Função que para de desenhar quando você solta o botão do mouse */
function mouseUpEvent(){
    canDraw = false;
}

/* Função que desenha */
function draw(x, y){
    /* Definição dos ponteiros para definir a localização do cursor ao desenhar */
    let pointX = x - screen.offsetLeft;
    let pointY = y - screen.offsetTop;

    ctx.beginPath();
    ctx.lineWidth = defaultSize;
    ctxlineJoin = "round";
    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(pointX, pointY);
    ctx.closePath();
    ctx.strokeStyle = defaultColor;
    ctx.stroke();

    mouseX= pointX;
    mouseY= pointY;
}

/* Função que limpa o quadro */
function clearBoard(){
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}