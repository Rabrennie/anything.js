/**
 * Gives you a ascii art string
 * @method Δ.figlet(AnythingJS).then
 * @author Ramon Gebben <ramon@ra-ge.net>
 * @param  {String} str String to format in ascii
 * @return {Promise}     Promise containing the ascii formated string
 */
anything.prototype.figlet = function(str) {
    var figletAPI = 'https://helloacm.com/api/figlet/?msg=' + str;
    return fetch(figletAPI).then(function(a){ return a.json() });
};
