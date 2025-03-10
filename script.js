// Espera a que el documento se cargue completamente
document.addEventListener("DOMContentLoaded", function() {
    const checkbox1 = document.getElementById("checkbox1");
    const checkbox2 = document.getElementById("checkbox2");
  
    // Agrega eventos para detectar cambios en cada casilla
    checkbox1.addEventListener("change", updateResults);
    checkbox2.addEventListener("change", updateResults);
  
    // Inicializa los resultados al cargar la página
    updateResults();
  });
  
  function updateResults() {
    // Obtiene el estado (true/false) de cada casilla
    const c1 = document.getElementById("checkbox1").checked;
    const c2 = document.getElementById("checkbox2").checked;
  
    // Calcula los resultados de los operadores lógicos
    const andResult = c1 && c2;                    // Solo es true si ambas están marcadas
    const orResult = c1 || c2;                     // Es true si al menos una está marcada
    const xorResult = (c1 && !c2) || (!c1 && c2);   // Es true solo si una está marcada
  
    // Actualiza el contenido de la vista con los resultados en forma de "Verdadero" o "Falso"
    document.getElementById("and-result").textContent = andResult ? "Verdadero" : "Falso";
    document.getElementById("or-result").textContent = orResult ? "Verdadero" : "Falso";
    document.getElementById("xor-result").textContent = xorResult ? "Verdadero" : "Falso";
  }
  