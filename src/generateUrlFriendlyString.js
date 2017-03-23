/*
Will replace all weird char to dash (-)
*/
var generateUrlFriendlyString = function generateUrlFriendlyString(name) {
    name = $.trim(name.toLowerCase());
    name = name.replace(/[^A-Za-z0-9]+/g, "-");
    while (name.charAt(0) === '-') {
        name = name.substr(1);
    }
    while (name.charAt(name.length - 1) === '-') {
        name = name.substr(0, name.length - 1);
    }
    return name;
}



anything.prototype.generateUrlFriendlyString = generateUrlFriendlyString;