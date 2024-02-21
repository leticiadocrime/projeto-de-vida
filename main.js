const botoes = document.querySelectorAll(".botao");

for(let i=0i <botoes.length;i++){
  botoes[i].onclick = funcion(){

    for(let j=0;j<botoes.length;j++){
      botoes[j].classlist.remove("ativo");
    }

    botoes[i].classlist.add("ativo");
  }
}
