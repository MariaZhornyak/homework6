//Работа с классами
//Дан элемент #elem. Добавьте ему класс www.
let elem = document.getElementById('elem'); 
elem.classList.add('www');
console.log(elem);
//Дан элемент #elem. Удалите у него класс www.
elem.classList.remove('www');
//Дан элемент #elem. Проверьте наличие у него класса www.
let checkClass = elem.classList.contains('www');
console.log(checkClass);
//Дан элемент #elem. Добавьте ему класс www, если его нет и удалите - если есть.
if (checkClass == true) {
    elem.classList.remove('elem');
} else if (checkClass == false) {
    elem.classList.add('elem');
}
console.log(elem);
//Дан элемент #elem. Узнайте количество его классов.
let elem = document.getElementById('elem'); 
let length = elem.classList.length;
console.log(length);
// Дан элемент #elem. Выведите последовательно алертом его классы.
let elem = document.getElementById('elem');
let className = elem.classList;
for (let i = 0; i < className.length; i++) {
    alert(className[i]);
}


// CSS
// Дан элемент #elem. Сделайте его красного цвета, размером 30px, добавьте ему границу.
var elem = document.getElementById('elem');
elem.style.cssText = 'color: red; font-size: 30px; border: 1px solid black; width: 300px; height: 100px;';

