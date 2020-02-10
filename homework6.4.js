//Практика
//Дан массив. Создайте ul через createElement,
//затем вставьте каждый элемент этого массива в отдельную li внутри этой ul,
//затем вставьте эту ul в конец body.
let arr = [67, 'jjfhg', 876, true];
var ul = document.createElement('ul');
for (let i = 0; i < arr.length; i++) {
    var li = document.createElement('li');
    li.innerHTML = arr[i];
    ul.appendChild(li);
}
document.body.appendChild(ul);
//Дан инпут. Рядом с ним находится кнопочка "+". 
//По нажатию на эту кнопку под нашим инпутом должен появится еще один пустой инпут.
<div>
    <input type = 'text' id = 'input'></input>
    <input type = 'submit' id = 'button' value = '+'></input>
</div>
let button = document.getElementById('button');
let input = document.getElementById('input');
button.addEventListener('click', clon)
function clon () {
    let clone = input.cloneNode(true);
    input.parentElement.appendChild(clone);
}
 //