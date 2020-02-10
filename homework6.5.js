//На величину границы
//Дан элемент #elem с границами. По нажатию на кнопку выведите толщину его верхней границы. 
    /*<style>
        #elem {
            height: 30px;
            border: 10px solid;
            padding: 50px;
        }
    </style>*/    
    let button = document.getElementById('button');
    let elem = document.getElementById('elem');
    button.addEventListener('click', func)
    function func () {
        alert(elem.clientTop);
    }
//Дан элемент #elem с границами. По нажатию на кнопку выведите толщину его левой границы. 
let button = document.getElementById('button');
let elem = document.getElementById('elem');
button.addEventListener('click', func)
function func () {
    alert(elem.clientLeft);
}


//На полный размер элемента
// Дан элемент #elem с границами. По нажатию на кнопку выведите его полную ширину с учетом границы и padding. 
let button = document.getElementById('button');
let elem = document.getElementById('elem');
button.addEventListener('click', func)
function func () {
    alert(elem.offsetWidth);
}
// Дан элемент #elem с границами. По нажатию на кнопку выведите его полную высоту с учетом границы и padding.
let button = document.getElementById('button');
let elem = document.getElementById('elem');
button.addEventListener('click', func)
function func () {
    alert(elem.offsetHeight);
}

//На размер элемента без границ, но с padding
//Дан элемент #elem с границами. По нажатию на кнопку выведите его полную ширину без учета границы, но с padding.
let button = document.getElementById('button');
let elem = document.getElementById('elem');
button.addEventListener('click', func)
function func () {
    alert(elem.clientWidth);
}
//Дан элемент #elem с границами. По нажатию на кнопку выведите его полную высоту без учета границы, но с padding. 
let button = document.getElementById('button');
let elem = document.getElementById('elem');
button.addEventListener('click', func)
function func () {
    alert(elem.clientHeight);
}

//Работа с getComputedStyle
//Дан элемент #elem. Получите его ширину и высоту, без учета границы и padding. 
let elem = document.getElementById('elem');
let button = document.getElementById('button');
button.addEventListener('click', func)
function func () {
    let css = getComputedStyle(elem);
    console.log('Width: ' + css.width + '\n' + 'Heigth: ' + css.height);
}

//Прокрутка элемента
//Дан элемент #elem с вертикальной полосой прокрутки. 
//По нажатию на кнопку выведите на сколько элемент прокручен сверху.
let elem = document.getElementById('elem');
let button = document.getElementById('button');
button.addEventListener('click', func)
function func() {
    alert(elem.scrollTop);
}
//Дан элемент #elem с горизонтальной полосой прокрутки
//По нажатию на кнопку выведите на сколько элемент прокручен слева. 
let elem = document.getElementById('elem');
let button = document.getElementById('button');
button.addEventListener('click', func)
function func() {
    alert(elem.scrollLeft);
}           
//Дан элемент #elem с вертикальной полосой прокрутки
//По нажатию на кнопку прокрутите его до позиции 100px сверху. 
let elem = document.getElementById('elem');
let button = document.getElementById('button');
button.addEventListener('click', func)
function func() {
    elem.scrollTop = 100;
}          
//Дан элемент #elem с вертикальной полосой прокрутки.
//По нажатию на кнопку прокрутите его на 100px вниз от текущего положения.
let elem = document.getElementById('elem');
let button = document.getElementById('button');
button.addEventListener('click', func)
function func() {
    elem.scrollTop += 100;
}          

//Дан элемент #elem с вертикальной полосой прокрутки
//По нажатию на кнопку выведите реальную высоту элемента с учетом прокрутки.
let elem = document.getElementById('elem');
let button = document.getElementById('button');
button.addEventListener('click', func)
function func() {
    alert(elem.scrollHeight);
}           
// Дан элемент #elem с горизонтальной полосой прокрутки. 
//По нажатию на кнопку выведите реальную ширину элемента с учетом прокрутки.
let elem = document.getElementById('elem');
let button = document.getElementById('button');
button.addEventListener('click', func)
function func() {
    alert(elem.scrollWidth);
}           
//Дан элемент #elem с вертикальной полосой прокрутки
//По нажатию на кнопку прокрутите его до позиции 100px от нижнего края элемента.
let elem = document.getElementById('elem');
let button = document.getElementById('button');
button.addEventListener('click', func)
function func() {
    let newScroll = elem.scrollHeight;
    let newHeight = newScroll - 100;
    elem.scrollTop = newHeight;
}       