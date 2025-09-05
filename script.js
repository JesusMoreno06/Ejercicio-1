// Script para mostrar un mensaje en consola al cargar la página
console.log("Página de recetas cargada correctamente ✅");

// Ejemplo de interacción: Al hacer clic en una receta, mostrar un alert
document.querySelectorAll(".receta").forEach(receta => {
    receta.addEventListener("click", () => {
        alert("Abriste la receta: " + receta.querySelector("h2").textContent);
    });
});
