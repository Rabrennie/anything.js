var toUasi = function (s) {
    return s
        .replace('a', 'e')
        .replace('e', 'i')
        .replace('i', 'o')
        .replace('o', 'u')
        .replace('u', 'a')
        .replace('A', 'E')
        .replace('E', 'I')
        .replace('I', 'O')
        .replace('O', 'U')
        .replace('U', 'A');
};

anything.prototype.toUasi = toUasi;
