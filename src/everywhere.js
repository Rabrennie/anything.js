/*
* Detects browser and redirects to Δ.everywhere() download page.
*/
var everywhere = function(){
	if(navigator.userAgent.search("Firefox") > -1)
    {
        // Firefox
        document.location.href = 'https://addons.mozilla.org/en-US/firefox/addon/anything-everywhere/';
    }
    else if (navigator.userAgent.search("Chrome") > -1)
    {
        // Chrome
        document.location.href = 'https://chrome.google.com/webstore/detail/%CE%B4everywhere/chhoibcjamonhegamgoikcefddnkckfp';
    }
    else
    {
        alert('Your browser is not supported.')
    }
}

anything.prototype.everywhere = everywhere;