var alphabet = function (uppercase) {
    var thealphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	if (uppercase) return thealphabet;
	else return thealphabet.toLowerCase();
};

anything.prototype.alphabet = alphabet;