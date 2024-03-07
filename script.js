let tituloH1 = document.querySelector('#titulo');
tituloH1.innerText = 'Título H1';
console.log(tituloH1);

let linkProz = document.querySelector('a');
linkProz.innerText = 'Link para site da Proz';
console.log(linkProz);

let listaNaoOrd = document.querySelector('ul');
listaNaoOrd.innerHTML = `
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>`;
console.log(listaNaoOrd);

let listaOrd = document.querySelector('#lista-ordenada');
listaOrd.innerHTML = `
<li><a href="https://pt.stackoverflow.com/"> Um </a></li>
<li><a href="https://teamtreehouse.com/"> Dois </a></li>
<li><a href="https://www.dio.me/"> Tres </a></li>`;
