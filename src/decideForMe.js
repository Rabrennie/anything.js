anything.prototype.MAX_DECISION_RESPONSES = 6;

/**
 * Undecided? Pass a question, like 'Should I buy this expensive 64 inche TV?'. The 
 * question will be ignored, but you'll have your answer. 
 **/
var decideForMe = function (question) {
  var choice = Math.floor(Math.random() * this.MAX_DECISION_RESPONSES);
  return decideResponseForValue(choice);
};

/**
 * Want a definitive answer locked into the specific question? No second chances?
 * Go ahead. Roll the die. 
 **/
var decideForMeFinalAnswer = function( question )
{
  var total = 0;
  
  for( var ch in question ) {
    total += question.charCodeAt( ch );
  } 
  
  // NOTE: -1 to avoid getting default "outlook hazy" response
  return decideResponseForValue( total % ( this.MAX_DECISION_RESPONSES - 1 ) );
};

// TODO: Shouldn't this be tucked away somewhere out of the global space?
var decideResponseForValue = function(choice)
{
  console.info("choice = " + choice);
  switch ( choice ) {
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
    default:
      return "Outlook hazy, ask again";
  }  
};

anything.prototype.decideForMe = decideForMe;
anything.prototype.decideForMeFinalAnswer = decideForMeFinalAnswer;