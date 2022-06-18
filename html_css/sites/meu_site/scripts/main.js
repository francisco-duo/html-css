let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function(){
    let meuSrc = minhaImagem.getAttribute('src');

    if (meuSrc === 'images/logo_pinguim.png'){
        minhaImagem.setAttribute('src', 'images/pinguim_irritado.png');
    } else {
        minhaImagem.setAttribute('src', 'images/logo_puinguim.png');
    }
}

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');


function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.');
    if (!meuNome || meuNome == null) {
        defineNomeUsuario();
    } else {
        localStorage.setItem('nome', meuNome);
        meuCabecalho.innerHTML = 'Respeitamos os puinguins, ' + meuNome;
    }
}