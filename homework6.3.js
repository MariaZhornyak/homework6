//Потомки
//Дан элемент #elem. Найдите первого потомка этого элемента и сделайте его текст красного цвета.
<div id = 'elem'>
    <a>HELLO</a>
    <li>JAVASCRIPT</li>
    <p>I LOVE YOU</p>
</div>
let elem = document.getElementById('elem');
elem.firstElementChild.style.cssText = 'color: red;'
//Дан элемент #elem. Найдите последнего потомка этого элемента и сделайте его текст красного цвета.
let elem = document.getElementById('elem');
elem.lastElementChild.style.cssText = 'color: red;'
//Дан элемент #elem. Найдите всех потомков этого элемента и добавьте им в конец текст '!'.
let elem = document.getElementById('elem');
let elems = elem.children;
for (let i = 0; i < elems.length; i++) {
    elems[i].innerHTML += '!';
}


//Соседи
//Дан элемент #elem. Найдите его соседа сверху и добавьте ему в конец текст '!'.
<div>
    <a>HELLO</a>
    <li id = 'elem'>JAVASCRIPT</li>
    <p>I LOVE YOU</p>
    <b>WINTER IS COMING</b>
</div>
let elem = document.getElementById('elem');
let previous = elem.previousElementSibling;
previous.innerHTML += '!';
//Дан элемент #elem. Найдите его соседа снизу и добавьте ему в конец текст '!'.
let elem = document.getElementById('elem');
let previous = elem.nextElementSibling;
previous.innerHTML += '!';
//Дан элемент #elem. Найдите его соседа снизу его соседа снизу (следующий элемент за соседним)
//и добавьте ему в конец текст '!'.
let previous = elem.nextElementSibling.nextElementSibling;
previous.innerHTML += '!';



//Родители
//Дан элемент #elem. Найдите его родителя и покрасьте его в красный цвет.
<div>
    <a id = 'elem'>HELLO WORLD</a>
</div>
let elem = document.getElementById('elem');
let parent = elem.parentElement;
parent.style.color = 'red';
//Дан элемент #elem. Найдите родителя его родителя и покрасьте его в красный цвет.
let elem = document.getElementById('elem');
let parent = elem.parentElement.parentElement;;
parent.style.color = 'red'; // Теперь свойство 'красный' есть у тега body


//Удаление и клонирование
//Дан элемент #parent, внутри него дан элемент #child.
//Дана кнопка. По нажатию на эту кнопку удалите элемент #child.
<div>
    <a id = 'parent'> LIFE
        <span id = 'child'>HELLO</span>
    </a>
    <input type = 'sumbit' id = 'button'></input>
</div>
let button = document.getElementById('button');
button.addEventListener('click', react);
function react() {
    var parent = document.getElementById('parent');
    var child = document.getElementById('child');
    parent.removeChild('child');
}
// Дан ol. По нажатию на кнопку получите его последнего потомка и удалите его.
<div>
    <ol id = 'elem'>
        <p>
            <span id="child">child</span>
        </p>
    </ol>
    <input type="submit" id="button"></input>
</div>
let button = document.getElementById('button');
button.addEventListener('click',func);
function func() {
    var elem = document.getElementById('elem');
    var child = document.getElementById('child');
    elem.lastElementChild.removeChild(child);
}
//Дан элемент. Сделайте так, чтобы по нажатию по нему этот элемент удалялся.
<div id = 'parent'>
    <ol id = 'child'>Hello, my name is Masha)))</ol>
</div>
let child = document.getElementById('child');
child.addEventListener('click',func);
function func() {
    child.remove();
}
//Дан ol, а внутри него li. Сделайте так, чтобы по нажатию на любую li эта li удалялась.
<div id = 'parent'>
    <ol>Hello, my name is Masha)))
        <li>I am 17 years old</li>
        <li>I am from Kharkiv</li>
        <li>I have a cat</li>
    </ol>
</div>
let child = document.getElementsByTagName('li');
for (let i = 0; i < child.length; i++) {
    child[i].addEventListener('click',func);
    function func() {
        child[i].remove();
    }
}


//Клонирование
//Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут.
<div>
    <input type = 'text' id = 'input'></input>
    <input type = 'submit' id = 'button'></input>
</div>
let input = document.getElementById('input');
let button = document.getElementById('button');
button.addEventListener('click', clon) 
function clon() {
    let clone = input.cloneNode(true);
    input.parentElement.appendChild(clone);
}











