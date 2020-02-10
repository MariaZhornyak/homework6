//Прокрутка страницы
//Дана страница с вертикальной полосой прокрутки
//По нажатию на кнопку узнайте на сколько страница прокручена по вертикали.
let elem = document.getElementById('elem');
let button = document.getElementById('button');
button.addEventListener('click', func)
function func() {
    alert(pageYOffset);
}           
//Дана страница с горизонтальной полосой прокрутки. 
//По нажатию на кнопку узнайте на сколько страница прокручена по горизонтали. 
let elem = document.getElementById('elem');
let button = document.getElementById('button');
button.addEventListener('click', func)
function func() {
    alert(pageXOffset);
}           
//Дана страница с горизонтальной и вертикальной полосами прокрутки. 
//По нажатию на кнопку прокрутите ее в точку 300px слева, 500px сверху.
let elem = document.getElementById('elem');
let button = document.getElementById('button');
button.addEventListener('click', func)
function func() {
    window.scrollBy(300, 500);
}          
//Дана страница с вертикальной полосой прокрутки. 
//По нажатию на кнопку прокрутите на 300px вниз от текущего положения.
let elem = document.getElementById('elem');
let button = document.getElementById('button');
button.addEventListener('click', func)
function func() {
    window.scrollBy(0, 300);
}       


//По нажатию на кнопку прокрутите страницу до самого низа. 
let elem = document.getElementById('elem');
let button = document.getElementById('button');
button.addEventListener('click', func)
function func() {
    window.scrollTo(0,document.body.clientHeight);
}
//По нажатию на кнопку прокрутите страницу на 400px от текущего положения.
let elem = document.getElementById('elem');
let button = document.getElementById('button');
button.addEventListener('click', func)
function func() {
    window.scrollBy(0, 400);
}           
//По нажатию на кнопку проверьте, прокручена ли страница до самого низа. 
//Если это так - прокрутите ее в положение 100px от верхнего края.
let elem = document.getElementById('elem');
let button = document.getElementById('button');
button.addEventListener('click', func)
function func() {
    if (body.scrollHeight - body.scrollTop == body.clientHeight) {
        window.scrollTo(0, 100);
    }
}           
// Дан элемент #elem. По клику на него увеличьте его ширину и высоту в 2 раза. 
let elem = document.getElementById('elem');
elem.addEventListener('click', func)
function func() {
    let startWidth = elem.offsetWidth;
    let startHeight = elem.offsetHeight;
    this.style.width = startWidth * 2 + 'px';
    this.style.height = startHeight * 2 + 'px';
}           

