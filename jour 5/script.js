$(document).ready(function() {
    $('#form').submit(function(event) {
        event.preventDefault(); // Empêche l'envoi du formulaire

        // Récupérer les valeurs des champs
        const nomValue = $('#nom').val();
        const prenomValue = $('#prenom').val();
        const emailValue = $('#email').val();
        const motdepasseValue = $('#motdepasse').val();
        const verificationMotdepasseValue = $('#verification_motdepasse').val();

        // Fonction pour afficher les messages d'erreur
        const displayError = (id, message) => {
            $(`#${id}-error`).text(message);
        };

        // Fonction pour effacer les messages d'erreur
        const clearError = (id) => {
            $(`#${id}-error`).text('');
        };

        // Valider les données
        const validateFields = () => {
            return new Promise((resolve, reject) => {
                let isValid = true;

                if (nomValue.length < 4 || prenomValue.length < 4) {
                    displayError('nom', 'Le nom et le prénom doivent contenir au moins 4 caractères.');
                    isValid = false;
                } else {
                    clearError('nom');
                }

                if (motdepasseValue.length < 8) {
                    displayError('motdepasse', 'Le mot de passe doit contenir au moins 8 caractères.');
                    isValid = false;
                } else {
                    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
                    if (!passwordRegex.test(motdepasseValue)) {
                        displayError('motdepasse', 'Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial.');
                        isValid = false;
                    } else {
                        clearError('motdepasse');
                    }
                }

                if (motdepasseValue !== verificationMotdepasseValue) {
                    displayError('verification_motdepasse', 'Les mots de passe ne correspondent pas.');
                    isValid = false;
                } else {
                    clearError('verification_motdepasse');
                }

                if (isValid) {
                    resolve();
                } else {
                    reject('Veuillez corriger les erreurs dans le formulaire.');
                }
            });
        };

        validateFields()
            .then(() => {
                $('#success-message').text('Félicitations pour votre inscription !');
            })
            .catch(error => {
                $('#success-message').text('');
                alert(error);
            });
    });
});
