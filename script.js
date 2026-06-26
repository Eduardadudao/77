function resposta(correta) {
  const resultado = document.getElementById("resultado");

  if (correta) {
    resultado.innerHTML = "✔ Resposta correta! Agricultura de precisão reduz desperdícios.";
    resultado.style.color = "#00ff88";
  } else {
    resultado.innerHTML = "✘ Resposta incorreta. Tente novamente!";
    resultado.style.color = "red";
  }
}
