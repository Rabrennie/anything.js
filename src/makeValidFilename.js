var makeValidFilename = function(str){
    var validcharacters = '-_.() abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var result = [];

    for (var i = 0; i < str.length; i++) {
        if (validcharacters.indexOf(str[i].toLowerCase()) > -1) {
            result.push(str[i]);
        }
    }

    return result.join('');
};

anything.prototype.makeValidFilename = makeValidFilename;
