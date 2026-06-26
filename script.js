function responder(correto) {
  let resultado = document.getElementById("resultado");

  if (correto) {
    resultado.innerHTML = "✅ Correto! Agricultura de precisão reduz desperdícios.";
    resultado.style.color = "#00ff88";
  } else {
    resultado.innerHTML = "❌ Resposta incorreta. Tente novamente!";
    resultado.style.color = "red";
  }
}

function simular() {
  let custo = Math.floor(Math.random() * 100) + 50;
  let economia = Math.floor(custo * 0.35);

  document.getElementById("saida").innerHTML =
    `💡 Custo estimado: R$ ${custo} | Economia com tecnologia: R$ ${economia}`;
}
