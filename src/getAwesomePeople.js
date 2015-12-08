/**
* getAwesomePeople
*/
var getAwesomePeople = function(success, error) {
    var httpRequest;

    function makeRequest(url) {
        httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = handleCallbacks;
        httpRequest.open('GET', url);
        httpRequest.send();
    }

    function handleCallbacks() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                console.log(httpRequest.responseText);
                success(httpRequest.responseText);
            } else {
                error(httpRequest.responseText);
            }
        }
    }

    makeRequest('https://api.github.com/repos/Rabrennie/anything.js/contributors');
};

anything.prototype.getAwesomePeople = getAwesomePeople;
