var rotatePage = function(degrees, animTime) {
    var body = document.body;
    var beforeTransition = body.style['-webkit-transition'];
    var beforeTransform = body.style['-webkit-transform'];
    body.style['-webkit-transition'] = 'all ' + animTime + 'ms linear';
    body.style['-webkit-transform'] = 'rotate(' + degrees + 'deg)';
    return {
        revert: function() {
            body.style['-webkit-transition'] = beforeTransition;
            body.style['-webkit-transform'] = beforeTransform;
        }
    }
};

anything.prototype.rotatePage = rotatePage;
