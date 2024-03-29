
document.getElementById("button").addEventListener("click", function() {
  fetch('expression.txt')
  .then(response => response.text())
  .then(data => {
    document.getElementById("expression").innerHTML = data;
  })
  .catch((error) => {
    console.error('Erreur:', error);
  });
});