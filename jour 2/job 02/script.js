document.getElementById("button").addEventListener("click", showhide);

function showhide() {
let article = document.getElementById("article");
if (article) {
    article.parentNode.removeChild (article);
} else {
    let newarticle = document.createElement ("article");
    newarticle.setAttribute("id" , "article");
    newarticle.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
    document.body.appendChild(newarticle);
}
}