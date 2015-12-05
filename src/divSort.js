var divSort = function (numbers) {
    var sorted = [];
    var lilDivs = {};

    var bigDiv = document.createElement("div");
    bigDiv.style.display = "inline-block";

    for (var i = 0; i < numbers.length; i++) {
        var width = numbers[i];
        lilDiv = document.createElement("div");
        lilDiv.style.width = width;
        bigDiv.appendChild(lilDiv);
        lilDivs[width] = (lilDivs[width] || []).concat([lilDiv]);
    }

    document.body.appendChild(bigDiv);

    while (sorted.length < numbers.length) {
        var max = bigDiv.offsetWidth;
        bigDiv.removeChild(lilDivs[max].pop());
        sorted.push(max);
    }

    document.body.removeChild(bigDiv);

    return sorted;
};

anything.prototype.divSort = divSort;