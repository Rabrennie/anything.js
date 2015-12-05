function negMod(n, m) {
    return ((n % m) + m) % m;
};

anything.prototype.negMod = negMod;