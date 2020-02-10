// Свойство tagName
//Дан элемент #elem. По клику на него выведите название его тега.
<p id = 'elem'></p>
let elem = document.getElementById('elem');
console.log(elem.tagName);
//Дан элемент #elem. По клику на него выведите название его тега в нижнем регистре.
<div id = 'elem'> </div>
let elem = document.getElementById('elem');
console.log(elem.tagName.toLowerCase());
//Даны элементы с классом www. Добавьте каждому элементу в конец название его тега в нижнем регистре

//Вставка элементов через appendChild
// Дан ol. Вставьте ему в конец li с текстом 'пункт'.
<ol id = 'parent'>List</ol>
    let parent = document.getElementById('parent');
    let child = document.createElement('li');
    child.innerHTML = 'пункт';
    parent.appendChild(child);
    document.body.append(parent);

//Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.
<ul id = 'parent'>List</ul>
let arr = ['hello', 87, true];
let parent = document.getElementById('parent');
for (let i = 0; i < arr.length; i++, child++) { 
    var child = document.createElement('li');       
    child.innerHTML = arr[i];
    parent.appendChild(child);
}
document.body.append(parent);

//Привязывание событий при вставке
// Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li
//Сделайте так, чтобы к вставляемым li было привязано следующее событие: по нажатию на li она должна вывести на экран свой текст.
<ul id = 'parent'>List</ul>
 let arr = ['hello', 87, true];
 let parent = document.getElementById('parent');
 for (let i = 0; i < arr.length; i++, child++) { 
     var child = document.createElement('li');
     child.addEventListener('click', function() {
         alert('You have choosen element number: ' + (i + 1));
     })
     child.innerHTML = arr[i];
     parent.appendChild(child)
 };
 document.body.append(parent);

//Вставка элементов через insertBefore
// Дан элемент ul, а в нем li #elem. Вставьте перед элементом #elem новую li с текстом '!!!'.
<ul id = 'parent'>
    <li id = 'elem'></li> 
</ul>
let parent = document.getElementById('parent');
let child = document.getElementById('elem');
let newChild = document.createElement('li');
newChild.innerHTML = '!!!';
parent.insertBefore(newChild, child);
document.body.append(parent);

//Вставка элементов через insertAdjacentHTML
//Дан элемент #elem. Вставьте перед ним span с текстом '!!!'.
<ul id = 'elem'></ul>
let elem = document.getElementById('elem');
elem.insertAdjacentHTML('beforeBegin', '<span>!!!</span>');

