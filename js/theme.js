console.log('chargement du script');

const theme = {

    //déclaration des propriétés
    colorStylesheet: null,
    pressedBtns: null,
    chosenColor: null,


    /**
     * initialise les variables après le chargement complet de la page web.
     */
    init: function () {
        console.log('la page a chargé');
        
        //Initialisation des variables
        theme.colorStylesheet = document.getElementById("theme");

        //récupération du color theme éventuellement sauvegardé dans local storage
        const whatColor = localStorage.getItem('colorTheme');
        if (whatColor != null) {
        theme.changeColorTheme(whatColor);
        }

        //installation des écouteurs d'événements
        theme.pressedBtns = document.getElementsByClassName('theme-btn');
        for (pressedBtn of theme.pressedBtns) {
            pressedBtn.addEventListener('click', theme.handleThemeColorClick);
        }
    },

    /**
     * @param {module} event 
     * retourne l'id du bouton lorsqu'on clique sur le bouton couleur
     */
    handleThemeColorClick: function (event) {
        //chosenColor correspond à l'id du bouton sur lequel on a cliqué
        chosenColor = event.target.id;
        theme.changeColorTheme(chosenColor);
    },

    /**
     * @param {string} colorTheme
     * Change la couleur du theme en fonction de l'id du bouton cliqué 
     */
    changeColorTheme: function(colorTheme) {

        theme.colorStylesheet.setAttribute('href', './css/style.' + colorTheme + '.css');
        localStorage.setItem('colorTheme', colorTheme);
    }
};


//Ecouteurs d'evenements : 

document.addEventListener('DOMContentLoaded', theme.init);