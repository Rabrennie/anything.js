var hohoho = function(context) {

  //If DOM is given
  if (typeof context === "object") {
    //Check if DOM is already loaded or if we need an EventListener
    if (document.readyState === "complete") {
      insertHohoho();
    } else {
      window.addEventListener("onload", insertHohoho, false);
    }
  }
  //If String is given
  else if (typeof context === "string") {
    return hohohoify(context);
  }

  //Main Replacing Function
  function hohohoify(str) {
    return str.replace(
      //Regex for Finding instances of "Hi", "Hey" and "Hello"
      RegExp("(Hi|Hey|Hello)(?=[^>]*(<?))", "g"),
      "Ho Ho Ho"
    );
  }

  //If HoHoHo needs to be pasted to DOM
  function insertHohoho() {
    context.innerHTML = hohohoify(context.innerHTML);
  }
}

anything.prototype.hohoho=hohoho;