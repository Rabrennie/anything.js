var morseBack = function(morseString) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@?.,- ";
    var morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", "-----", ".--.-.", "..--..", ".-.-.-", "--..--", "-....-", "   "];
    var newString = "";
    morseString.split(" ").forEach(function(a){
        var i = morse.indexOf(a);
        if (a != -1) {
            newString += chars[i];
        }
    });
    return newString;
};

anything.prototype.morseBack = morseBack;
