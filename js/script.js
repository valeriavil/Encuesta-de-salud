const dolor = document.getElementById("dolor");
const valorDolor = document.getElementById("valorDolor");

dolor.addEventListener("input", () => {
    valorDolor.textContent = dolor.value;
});

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Encuesta enviada correctamente ✅");
});
