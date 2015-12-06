/* Undecided? Pass a question, like 'Should I buy this expensive 64 inches tv?'. The question will be ignored, but you'll have your answer. */
var decideForMe = function (question) {
  var choice = Math.floor(Math.random() * 5);
  switch (choice) {
    case 0:
      return "Yes";
    case 1:
      return "No";
    case 2:
      return "Maybe";
    case 3:
      return "Not yet";
    case 4:
      return "Knock yourself out";
  }
};

anything.prototype.decideForMe = decideForMe;
