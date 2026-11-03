const form = document.querySelector("form");

form.addEventListener("submit", function(e){
  e.preventDefault();

  // Seleção dos elementos do DOM
    const deepInput = document.querySelector("#deep");
    const permeability_gclInput = document.querySelector("#permeability_gcl");
    const thickness_gclInput = document.querySelector("#thickness_gcl");
    const permeability_cclInput = document.querySelector("#permeability_ccl");
    const thickness_cclInput = document.querySelector("#thickness_ccl");
    const results = document.querySelector("#results");

    // Conversão segura tratando vírgula e ponto
    let deep = parseFloat(deepInput.value.replace(",", "."));
    let permeabilityGcl = parseFloat(permeability_gclInput.value.replace(",", "."))/1000000000;
    let thicknessGcl = parseFloat(thickness_gclInput.value.replace(",", "."))/1000;
    let permeabilityCcl = parseFloat(permeability_cclInput.value.replace(",", "."))/1000000000;
    let thicknessCcl = parseFloat(thickness_cclInput.value.replace(",", "."))/1000;

  // Validação de números válidos
    if (isNaN(deep) || isNaN(permeabilityGcl) || isNaN(thicknessGcl) || isNaN(permeabilityCcl) || isNaN(thicknessCcl)) {
      results.textContent = "Please enter valid numeric values!";
      return;
    }
    // Validação se todos os valores são maiores que zero
    else if (deep <= 0 || permeabilityGcl <= 0 || thicknessGcl <= 0 || permeabilityCcl <= 0 || thicknessCcl <= 0) {
      results.textContent = "All values must be greater than zero!";
      return;
    }

  // Cálculo (Nota: se os teores estiverem em %, ajuste a fórmula caso precise dividir por 100)
  let volume_gcl = permeabilityGcl * (deep+(thicknessGcl)) / thicknessGcl*(10**9);
  let volume_ccl = permeabilityCcl * (deep+(thicknessCcl)) / thicknessCcl*(10**9);
  // Apresentação do resultado corrigida para a variável correta e unidade m³
  results.innerHTML = `For this design configuration, the GCL has a flow rate of ${volume_gcl.toFixed(2)}.10<sup>-9</sup> m³/s, and the clay layer has a flow rate of ${volume_ccl.toFixed(2)}.10<sup>-9</sup> m³/s. `;

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
