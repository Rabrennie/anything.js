var timesPerkele = 5;
var counter = 0;
var perkeleMsg = 'Perkele';

var perkele = function(prkl) {
    if (!prkl || prkl.length === 0 || prkl.length > 100)
    {
        return '';
    }
    if (counter === 0)
    {
        counter++;
        return perkele(prkl);
    } else if (counter === timesPerkele) {
        if (prkl.length > 1) {
            return prkl + prkl.slice(0, prkl.length/2);
        }
        return prkl;
    }
    return prkl + perkele(prkl.slice(0, prkl.length/2));
};

function perkeleClick(elem) {
    elem.style.color = getPerkeleColor();
    if (elem.innerHTML.length > 100) {
        elem.innerHTML = perkeleMsg;
    } else {
        elem.innerHTML = perkele(elem.innerHTML);
    }
}

function getPerkeleColor() {
  function color() {
    return Math.floor(Math.random()*256).toString(16)
  }
  return "#"+color()+color()+color();
}

function getPerkele() {
    var perkeleElement = document.getElementById('perkeleId');
    return perkeleElement;
}

window.onload = function(e) {
    // No JQuery perkele!
    var perkeleElem = getPerkele();
    perkeleElem.innerHTML = perkeleMsg;
}


