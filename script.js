// ====================================================
// Projeto Agrinho 2026
// Agricultura de Precisão
// Aluna: Eduarda Lorrani
// Professor: Luiz Alessandro
// ====================================================

// Função que calcula a economia de água

function calcular() {

    let area = parseFloat(document.getElementById("area").value);
    let agua = parseFloat(document.getElementById("agua").value);
    let resultado = document.getElementById("resultado");

    // Verifica se os campos foram preenchidos
    if (isNaN(area) || isNaN(agua) || area <= 0 || agua <= 0) {

        resultado.innerHTML =
        "⚠️ Informe valores válidos para realizar a simulação.";

        resultado.style.color = "red";

        return;
    }

    // Consumo total

    let consumo = area * agua;

    // Economia estimada de 25%

    let economia = consumo * 0.25;

    // Novo consumo

    let novoConsumo = consumo - economia;

    resultado.style.color = "#1b5e20";

    resultado.innerHTML = `

    <h3>Resultado da Simulação</h3>

    <p><strong>Consumo atual:</strong> ${consumo.toFixed(2)} litros</p>

    <p><strong>Economia estimada:</strong> ${economia.toFixed(2)} litros</p>

    <p><strong>Novo consumo:</strong> ${novoConsumo.toFixed(2)} litros</p>

    <br>

    ✅ Utilizando Agricultura de Precisão, sensores,
    programação e Inteligência Artificial,
    o produtor pode reduzir significativamente
    o desperdício de água e fertilizantes.

    `;
}
