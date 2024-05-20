"use strict";
function progressInput(a) {
    if (typeof a === 'number') {
        return a * a;
    }
    else if (typeof a === 'string') {
        return a.toUpperCase();
    }
    else if (typeof a === 'boolean') {
        return !a;
    }
    else {
        throw new Error("Error with the input");
    }
}
console.log(progressInput(true));
