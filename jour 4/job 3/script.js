 document.getElementById("filterButton").addEventListener("click", function() {
        let id = document.getElementById("id").value;
        let name = document.getElementById("name").value;
        let type = document.getElementById("type").value;

        fetch('pokemon.json')
        .then(response => response.json())
        .then(data => {
            let results = data.filter(pokemon => {
                return (!id || pokemon.id == id) &&
                       (!name || pokemon.name.toLowerCase().includes(name.toLowerCase())) &&
                       (!type || pokemon.type == type);
            });

            let resultsDiv = document.getElementById("results");
            resultsDiv.innerHTML = '';
            results.forEach(pokemon => {
                resultsDiv.innerHTML += `<p>${pokemon.name} (ID: ${pokemon.id}, Type: ${pokemon.type})</p>`;
            });
        })
        .catch((error) => {
            console.error('Erreur:', error);
        });
    });
    