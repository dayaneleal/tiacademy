window.onload = function() {
  //alert("Olá Mundo!")

  const botao = document.getElementById('btn');
  const txtBox = document.querySelector("#txtBox");
  const caixa = document.querySelector("#caixa");

  botao.addEventListener('click', function(){
    caixa.innerHTML += txtBox.value
  })

}