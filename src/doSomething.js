var doSomething = function(...args){
  var functions = Object.keys(Object.getPrototypeOf(anything));
  return anything[functions[Math.floor(Math.random() * functions.length)]](...args);
}
anything.prototype.doSomething = doSomething;
