  /**
  * Applies the css to the elements that were found using anything.find
  * 
  * @param Object props the properties to apply to the object
  */
  var css = function(props) {
  
    
    if ('undefined' === typeof this.queryResult) 
      return this;
    
    if ('object' === typeof this.queryResult) {
      
      // If no arguments are given and there is only one result
      // then return the style object of the element
      if('undefined' === typeof props) 
        return this.queryResult.style;
        
      for (var property in props) {
        if (undefined !== property)
          this.queryResult.style[property] = props[property];
      }
      
      return this;
    }
    
    for (var element in this.queryResult) {
      for (var property in props) {
        if (undefined !== property)
          this.queryResult[element].style[property] = props[property];
      }
    }
    
    return this;
  }
  
  anything.prototype.css = css;
  