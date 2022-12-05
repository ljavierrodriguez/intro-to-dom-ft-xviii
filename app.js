/* 

document:

getElementById('id')
getElementsByClassName('class');
getElementsByTagName('tag');
getElementsByName('name');

querySelector('selector');
querySelectorAll('selector');

createElement('tag');
createTextNode('texto');
insertBefore(contenido, elemento);
appendChild(element);
innerHTMl = valor;
*/

let box = document.getElementById('box');

box.style.backgroundColor = "gray";


let contenidos = document.getElementsByClassName('contenido');

console.log(contenidos);

contenidos[0].style.backgroundColor = "blue";
for(let i = 0; i<contenidos.length; i++){
    contenidos[i].style.backgroundColor = "blue";
}

let list = document.getElementsByTagName('li');
console.log(list);

let listas = document.getElementsByTagName('ul');
console.log(listas);

let front = document.getElementsByClassName('front');

front[0].getElementsByTagName('li');
front[0].classList.add('frontend');
front[0].classList.remove('front');

let genero = document.getElementsByName('genero');
console.log(genero);

let box2 = document.getElementsByName('box');
console.log(box2);


let frontend = document.querySelectorAll('.frontend li');
console.log(frontend);

frontend.forEach((li, index) => {
    if(index % 2 === 0) li.style.color = "green";
})

let angular = document.querySelector('.frontend :nth-child(4)');
angular.style.color = "blueviolet"


let div = document.createElement('div');
div.id = "newDiv";
div.classList.add('boxing');
div.innerHTML = "Hola Mundo desde el DOM";

document.body.appendChild(div);


let ul = document.createElement('ul');

let li = document.createElement('li');

li.innerHTML = "Nuevo LI";

ul.appendChild(li);

div.appendChild(ul);

let texto = document.createTextNode('Hola desde 4Geeks');

//div.appendChild(texto);

div.insertBefore(texto, ul);


let divClass = document.querySelector("#dClass");

//divClass.classList.remove('class3');
/* divClass.classList.forEach( (c, i) => {
    console.log(i);
    divClass.classList.remove(c)
});  */

for(let i = 0; i < divClass.classList.length; i++){
    divClass.classList.remove(divClass.classList[i]);
}

divClass.classList.add('class6');



let boxp = document.querySelector('#box');

let contents = boxp.querySelectorAll('.contenido');
console.log(contents);




