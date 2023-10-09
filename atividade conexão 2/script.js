let tituloh1 = document.querySelector("#titulo");
tituloh1.innerText = "Atividade Proz";

let taga = document.querySelector("a");

taga.innerText = "Link redirecionado";

let ListaNOrdenada = document.querySelector("ul")
ListaNOrdenada.innerHTML = 
    `<ul>
    <li>HTML</li>
    <li>JavaScript</li>
    <li>CSS</li>
    </ul>`

let listaOrdenada = document.querySelector("ol")
listaOrdenada.innerHTML = 
    `<ol>
    <li><a href="">Curso FRONT END</a></li>
    <li><a href="">Curso BACK END</a></li>
    <li><a href="">Curso Nuvem</a></li>
</ol>`
