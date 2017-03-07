/* French locals for flatpickr */
var Flatpickr = Flatpickr||{l10ns: {}};
Flatpickr.l10ns.fr = {
    weekdays: {
        shorthand: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
        longhand: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
    },
    months: {
        shorthand: ['Janv', 'Févr', 'Mars', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sept', 'Oct', 'Nov', 'Déc'],
        longhand: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
    },
    firstDayOfWeek: 1,
    ordinal: function ordinal(nth) {
        if (nth > 1) {
            return "ème";
        }

        return "er";
    },
    rangeSeparator: " à ",
    weekAbbreviation: "Sem"
};

if (typeof module !== "undefined") {
    module.exports = Flatpickr.l10ns;
}