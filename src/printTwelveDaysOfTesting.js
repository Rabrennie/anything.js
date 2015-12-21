/**
 * The Twelve Days of Christmas Testing.
 * @see {@link http://redd.it/3wh7rv}
 * @author Vitor Cortez <vitoracortez+github@gmail.com>
 */
var printTDoT = function() {
    var days = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth'];

    var gifts = [
        "An Irreproducible bug",
        "Two Build requests",
        "Three Small defects",
        "Four Creeping specs",
        "FIVE CRITICALS",
        "Six DBs failing",
        "Seven Customers cursing",
        "Eight Hours wasted",
        "Nine Testers testing",
        "Ten Tables dropping",
        "Eleven Coders coding",
        "Twelve Patches pending"
    ];

    var verses = [],
        song;

    for (var i = 0; i < 12; ++i) {
        var lines = [];
        lines[0] = `On the ${days[i]} day of Testing, my QA gave to me:`;

        var j = i + 1,
            k = 0;

        while (j-- > 0)
            lines[++k] = `- ${gifts[j]}${j == 0 ? '.': ','}`;

        verses[i] = lines.join('\n');

        if (i == 0)
            gifts[0] = "And a Bug that can't be reproduced";
    }

    console.log(verses.join('\n\n'));
};

anything.prototype.printTwelveDaysOfTesting = printTDoT;
