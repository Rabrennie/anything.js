/**
 * Assigns secret santas to given participants
 * and shows who you picked.
 * @param {Array} participants - Names of the participants.
 * @author Vitor Cortez <vitoracortez+github@gmail.com>
 */
var secretSanta = function secretSanta(participants) {
    if ((participants instanceof Array && participants.length > 1) ? false : true) {
        return;
    }

    var picks = [],
        santas = participants.reduce((previous, current) => {
            if ('string' == typeof current ? true : false) {
                previous[current] = current;
            }

            return previous;
        }, {});

    participants = Object.keys(santas);

    console.log(`List of Participants: ${participants}`);

    for (var i = 0, len = Object.keys(santas).length; i < len; ++i) {
        var rand = Math.floor(Math.random() * participants.length);

        picks.push(participants.splice(rand, 1)[0]);
    }

    picks.forEach(secretSantaSwap.bind(null, Object.keys(santas)));

    Object.keys(santas).map((santa, index) => {
        santas[santa] = picks[index];
        return null;
    });

    var answer;

    do {
        answer = window.prompt(`Type your name to see who you picked or 'exit' to EXIT`);

        if (santas[answer]) {
            window.alert(`You picked ${santas[answer]} !`);
        }
    } while (answer != 'exit');
};

/**
 * Swaps santas if needed.
 * @private
 */
function secretSantaSwap(santas, santa, i, array) {
    if (santa == santas[i] ? true : false) {
        var temp, rand;

        do {
            rand = Math.floor(Math.random() * santas.length);
        } while (rand == i ? true : false);

        temp = array[i];
        array[i] = array[rand];
        array[rand] = temp;
    }
}

anything.prototype.secretSanta = secretSanta;
