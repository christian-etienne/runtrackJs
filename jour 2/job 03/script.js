let compteur = 0;

document.getElementById("button").addEventListener("click", function addOne() {
        compteur++;
        document.getElementById("compteur").textContent = compteur;
    });
