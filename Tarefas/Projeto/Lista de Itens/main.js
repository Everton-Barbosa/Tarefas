//variaveis dos elementos da lista


//Atribuindo o formulario a uam váriavel
const form = document. getElementById('addForm');
//Atribuir a lista a uma variavel
const list = document.getElementById('items');
//Atribução da barra de pesquisa
const filter = document.getElementById('filter');

form.addEventListener('submit', addItem);

list.addEventListener('click', removeItem);

filter.addEventListener('keyup', filtrarItem);

function filtrarItem(evento){

    let txt = evento.target.value.toLowerCase(); 
    let itens = document.getElementsByTagName('li');


    Array.from(itens).forEach( function (item){

        let itemName = item.firstChild.textContent;

    if (itemName.toLowerCase().indexOf(txt) != -1) {

        item.style.display = 'block';

    } else {
        item.style.display = 'none';
        console.log(itemName.toLowerCase().indexOf(txt))
    }
    });

};


function addItem(evento){

    evento.preventDefault();
    
    const textoItem = document.getElementById('item').value;

    if (textoItem != '') {

    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(textoItem));
    
    const btn = document.createElement('button');
    btn.className = 'btn btn-danger btn-sm float-end delete';
    btn.appendChild(document.createTextNode('X'));
    li.appendChild(btn);
    
    list.appendChild(li);
    form.reset();

    } else {
        alert('Digite algo!')
    }
};

function removeItem (evento){
    console.log(evento.target)
   if(evento.target.classList.contains('delete')) {
    let li = evento.target.parentElement;
    list.removeChild(li);
   }

};