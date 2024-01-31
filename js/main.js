//capturando o botão
const botaoDisparaContagem = document.querySelector('.btn-contagem');
let numero=10;

//adicionando um evento dinamicamente
botaoDisparaContagem.addEventListener('click', ()=> {
    
    while(numero>=0){
    console.log (numero);
    numero=numero-1;
    }
    
})