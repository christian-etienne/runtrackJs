function jsonValueKey(jsonString, key) {
    let jsonObject = JSON.parse(jsonString);
    return jsonObject[key];
}

let jsonString = '{"name":"La plateforme","address":"8 rue","city":"Marseille","nb_staff":"11","creation":"2019"}';
let key = "city";
console.log(jsonValueKey(jsonString, key));  // Affiche "Marseille"
