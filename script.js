document.addEventListener("DOMContentLoaded", function() {
  const checkbox1 = document.getElementById("checkbox1");
  const checkbox2 = document.getElementById("checkbox2");
  const resetBtn = document.getElementById("reset-btn");

  checkbox1.addEventListener("change", updateResults);
  checkbox2.addEventListener("change", updateResults);
  resetBtn.addEventListener("click", resetSelection);

  updateResults();
});

function updateResults() {
  const c1 = document.getElementById("checkbox1").checked;
  const c2 = document.getElementById("checkbox2").checked;

  const andResult = c1 && c2;
  const orResult = c1 || c2;
  const xorResult = (c1 && !c2) || (!c1 && c2);

  document.getElementById("and-result").textContent = andResult ? "Verdadero" : "Falso";
  document.getElementById("or-result").textContent = orResult ? "Verdadero" : "Falso";
  document.getElementById("xor-result").textContent = xorResult ? "Verdadero" : "Falso";

  updateIcons("and-icon", andResult);
  updateIcons("or-icon", orResult);
  updateIcons("xor-icon", xorResult);
}

function updateIcons(elementId, value) {
  const icon = document.getElementById(elementId);
  icon.src = value ? "tick.png" : "cross.png";  // Icono dinámico
  icon.alt = value ? "Verdadero" : "Falso";
}

function resetSelection() {
  document.getElementById("checkbox1").checked = false;
  document.getElementById("checkbox2").checked = false;
  updateResults();
}
