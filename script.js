function responder(resposta) {
  const resultado = document.getElementById("resultado");

  if (resposta === true) {
    resultado.innerHTML = "✅ Correto! Agricultura de precisão reduz desperdícios.";
    resultado.style.color = "#00ff88";
  } else {
    resultado.innerHTML = "❌ Errado! Tente novamente.";
    resultado.style.color = "red";
  }
}

function simular() {
  const custo = Math.floor(Math.random() * 100) + 50;
  const economia = Math.floor(custo * 0.35);

  document.getElementById("saida").innerHTML =
    `💡 Custo: R$ ${custo} | Economia: R$ ${economia}`;
}
