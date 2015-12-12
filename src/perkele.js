var perkele = function(prkl) {
    if (!prkl || prkl.length === 0 || prkl.length > 100)
    {
        return '';
    }
    var perkeleRecursive = prkl + perkele(prkl.slice(0, prkl.length-1));
    console.log(perkeleRecursive);
    return perkeleRecursive;
};

anything.prototype.perkele = perkele;
