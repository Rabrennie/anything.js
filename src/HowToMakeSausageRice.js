/**
 * Prints the algorithm to make rice with sausages.
 * @return {Abstract} Sadness
 * @author Vitor Cortez <vitoracortez+github@gmail.com>
 */
var sausageRiceAlgorithm = function() {
  var steps = [];

  steps.push("Cut the 4 thin sausages, any shape you like.");
  steps.push("Cut an onion, remember to wash is first.");
  steps.push("Throw a spoon full of butter in you pan.");
  steps.push("Turn on the fire, make it a small fire.");
  steps.push("Throw the sausages inside the pan and wait.");
  steps.push("Start washing the rice.");
  steps.push("Throw the onions inside the pan and also any seasoning.");
  steps.push("Once the sausages look good, throw the rice on top of it.");
  steps.push("Start putting water until it covers the rice.");
  steps.push("Close the pan and wait for a few minutes.");
  steps.push("Open the pan to taste it.");
  steps.push("Realize it tastes like crap and you are a failure.");
  steps.push("Make some ramen and eat it while sobbing.");

  var algorithm = steps.map((step, i) => console.log.bind(console, `Step ${i+1}: ${step}`));

  for(line of algorithm) line();
};

anything.prototype.HowToMakeSausageRice = sausageRiceAlgorithm;
