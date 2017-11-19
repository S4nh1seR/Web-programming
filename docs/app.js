
var newUl = document.createElement("ul");
root.appendChild(newUl);

var newLi = document.createElement("li");
newUl.appendChild(newLi);
var span = document.createElement("span");
var inText = document.createTextNode("Сделать задание #3 по web-программированию");
span.appendChild(inText);
newLi.appendChild(span);

var btn = document.createElement("button");
var insideText = document.createTextNode("Удалить");
btn.appendChild(insideText);
newLi.appendChild(btn);
btn.onclick = function() {
    newUl.removeChild(newLi);
}

var input = document.createElement("input");
input.id = "add_task_input";
root.appendChild(input);

var but = document.createElement("button");
but.id = "add_task";
var intex = document.createTextNode("Добавить задачу");
but.appendChild(intex);
root.appendChild(but);
but.onclick = function() {
    var newLi = document.createElement("li");
    newUl.appendChild(newLi);
    var span = document.createElement("span");
    var inText = document.createTextNode(document.getElementById('add_task_input').value);
    span.appendChild(inText);
    newLi.appendChild(span);
    var btn = document.createElement("button");
    var insideText = document.createTextNode("Удалить");
    btn.appendChild(insideText);
    newLi.appendChild(btn);
    btn.onclick = function() {
        newUl.removeChild(newLi);
    }
}
