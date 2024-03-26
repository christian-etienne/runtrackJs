function jourTravaille(date) {
    var joursFeries = [
        new Date(2024, 0, 1),  // Jour de l'An
        new Date(2024, 3, 29), // Lundi de Pâques
        new Date(2024, 4, 1),  // Fête du Travail
        new Date(2024, 4, 8),  // Victoire 1945
        new Date(2024, 4, 30), // Ascension
        new Date(2024, 5, 10), // Lundi de Pentecôte
        new Date(2024, 6, 14), // Fête Nationale
        new Date(2024, 7, 15), // Assomption
        new Date(2024, 10, 1), // Toussaint
        new Date(2024, 10, 11),// Armistice 1918
        new Date(2024, 11, 25) // Noël
    ];

    var jour = date.getDay();
    var estFerie = joursFeries.some(function(jourFerie) {
        return jourFerie.getTime() === date.getTime();
    });

    if (estFerie) {
        console.log(`Le ${date.getDate()} ${date.getMonth()+1} ${date.getFullYear()} est un jour férié`);
    } else if (jour === 0 || jour === 6) {
        console.log(`Non, le ${date.getDate()} ${date.getMonth()+1} ${date.getFullYear()} est un week-end`);
    } else {
        console.log(`Oui, le ${date.getDate()} ${date.getMonth()+1} ${date.getFullYear()} est un jour travaillé`);
    }
}

jourTravaille (2024, 5, 30)