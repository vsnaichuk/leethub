/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if (Array.isArray(obj))
        return obj.length === 0;

    for (const key in obj) {
        if (Object.hasOwn(obj, key)) 
            return false;
    }
    return true;
};