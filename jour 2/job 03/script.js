let compteur = 0;

document.getElementById("button").addEventListener("click", function() {
    compteur++;
    document.getElementById("compteur").textContent = compteur;
});
