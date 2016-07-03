/**
 * Inspired by http://imgur.com/jalm9B8
 * @param object - The object to convert.
 */
var convertToJSON = function(object) {
    let json_str = '';
    // Primitives
    switch(typeof object) {
        case 'string':
            return '"'+object+'"';
        case 'boolean':
        case 'number':
            return object.toString();
        case 'undefined':
        case 'function':
            return false
    }
    // null
    if(object == null) return 'null';
    // Arrays
    if(typeof object == 'object' && object.forEach) {
        json_str += '[';
        object.forEach(obj=>{
            let o = convertToJSON(obj); // Recursive is the future!
            if (o !== false) {
                json_str += o;
                json_str += ',';
            }
        });
        // Remove trailing comma
        json_str = json_str.substr(0, json_str.length - 1);
        return json_str + ']';
    }
    // Objects
    else if(typeof object == 'object') {
        json_str = '{';
        // Get those keys
        let keys = Object.keys(object);
        // Build JSON
        keys.forEach(key=>{
            let o = convertToJSON(object[key]); // Recursive is amazing!
            if (o !== false) {
                json_str += '"' + key + '":';
                json_str += o; // Recursive is amazing!
                json_str += ',';
            }
        });
        // Remove trailing comma
        json_str = json_str.substr(0, json_str.length - 1);
        return json_str + '}';
    }
    else {
        return 'wtf';
    }
}

anything.prototype.convertToJSON = convertToJSON;
