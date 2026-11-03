const form = document.querySelector("form");

form.addEventListener("submit", function(e){
  e.preventDefault();

  // Seleção dos elementos do DOM
  const TSP_misturaInput = document.querySelector("#TSP_mistura");
    const TSP_finalInput = document.querySelector("#TSP_final");
    const densidade_misturaInput = document.querySelector("#densidade_mistura");
    const densidade_finalInput = document.querySelector("#densidade_final");
    const volume_misturaInput = document.querySelector("#volume_mistura");
    const results = document.querySelector("#results");

    // Conversão segura tratando vírgula e ponto
    let tspMistura = parseFloat(TSP_misturaInput.value.replace(",", "."));
    let tspFinal = parseFloat(TSP_finalInput.value.replace(",", "."));
    let densidadeMistura = parseFloat(densidade_misturaInput.value.replace(",", "."));
    let densidadeFinal = parseFloat(densidade_finalInput.value.replace(",", "."));
    let volumeMistura = parseFloat(volume_misturaInput.value.replace(",", "."));

  // Validação de números válidos
    if (isNaN(tspMistura) || isNaN(tspFinal) || isNaN(densidadeMistura) || isNaN(densidadeFinal) || isNaN(volumeMistura)) {
      results.textContent = "Please enter valid numeric values!";
      return;
    }
    // Validação se todos os valores são maiores que zero
    else if (tspMistura <= 0 || tspFinal <= 0 || densidadeMistura <= 0 || densidadeFinal <= 0 || volumeMistura <= 0) {
      results.textContent = "All values must be greater than zero!";
      return;
    }
    // Validação se os teores de sólidos (%) são menores que 100
    else if (tspMistura >= 100 || tspFinal >= 100) {
      results.textContent = "The solids content (%) must be less than 100!";
      return;
    }

  // Cálculo (Nota: se os teores estiverem em %, ajuste a fórmula caso precise dividir por 100)
  let volume_final = (tspMistura * densidadeMistura * volumeMistura) / (tspFinal * densidadeFinal);

  // Apresentação do resultado corrigida para a variável correta e unidade m³
  results.textContent = `Sludge cake volume is ${volume_final.toFixed(2)} m³`;

  // Limpar os campos após o cálculo
  //TSP_misturaInput.value = "";
  //TSP_finalInput.value = "";
  //densidade_misturaInput.value = "";
  //densidade_finalInput.value = "";
  //volume_misturaInput.value = "";
});



//if (isNaN(feet) || isNaN(inches)) {
//  results.textContent = "Please enter a valid number!";
//} else if (feet < 0) {
//  results.textContent = "Please enter a feet value bigger than 0.";
//} else if (inches < 0 || inches >= 12) {
//  results.textContent = "Please enter a inches value between 0 and 12.";
//} else {
//  let totalInches = feet * 12 + inches;
//  let cm = totalInches * 2.54;
//  results.textContent = `${cm.toFixed(2)} cm`;
//  feetInput.value = "";
//  inchesInput.value = "";
//}
//}
