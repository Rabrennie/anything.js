/**
 * WARNING: IF YOU ARE A HACKER PLEASE DON'T READ THIS, SIR.
 * Safely decode your string data to prevent hackers.
 * @param {string} securedData - String to be decoded.
 * @return {string} Your data is now readable.
 * @see {@link cryptographString} for further knowledge.
 * @author Vitor Cortez <vitoracortez+github@gmail.com>
 */
var decryptographString = function(securedData) {
    var readableData = window.atob(securedData);
    
    return readableData;
};

anything.prototype.decryptographString = decryptographString;
