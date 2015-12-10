// I've probably made a grammer mistake here,
// so if you're an actual german speaker and would like to fix this,
// please do.
var conjugate = function(stem, pronoun, tense, stemchange) {
    var prasens, prateritum, umlauts
    pronoun = pronoun || 'sie'
    tense = tense || 'prasens'
    stemchange = stemchange || false
    prateritum = {
        sie: "ten",
        du: "test",
        er: "te",
        es: "te",
        ich: 'te',
        wir: 'ten',
        ihr: 'tet'
    }
    prasens = {
        sie: "en",
        du: "st",
        er: "t",
        es: "t",
        ich: 'e',
        wir: 'en',
        ihr: 't'
    }
    umlauts = {
        a: "ä",
        o: "ö",
        u: "ü"
    }
    if (stemchange && ['er', 'sie', 'es'].indexOf(pronoun) !== -1) {
        stem = stem.replace(stemchange, umlauts[stemchange])
    }
    if (tense === "prateritum") {
        return stem + prateritum[pronoun]
    } else if (tense === "prasens") {
        return stem + prasens[pronoun]
    } else if (tense === "futur") {
        return stem + 'en'
    }
}

anything.prototype.conjugate = conjugate
