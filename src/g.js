var g = {
    build: function (base, shaft, end, tail) {
        return base + shaft + end + tail;
    },
    base: {
        full: "8",
        half: "3"
    },
    shaftType: {
        double: "=",
        alternative: "═"
    },
    shaftLength: {
        nano: 0,
        macro: 1,
        milli: 2,
        kilo: 5,
        mega: 10,
        giga: 20,
        tera: 100
    },
    shaftBuilder: function (shaft, length) {
        return Array(length + 1).join(shaft);
    },
    end: {
        circle: "D",
        circleDashed: "‎Ð",
        pointy: ">",
        rounded: ")",
        flat: "]"
    },
    tail: {
        wavy: "~",
        flat: "-",
        double: "="
    }
};

anything.prototype.g = g;