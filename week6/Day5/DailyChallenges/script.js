// Create a function that:

// takes in two strings as two parameters
// and returns a boolean that indicates whether or not the first string is an anagram of the second string.



function checkAnagram(a, b) {
    a = a.toLowerCase()
    b = b.toLowerCase()
    let anaA = a.replace(/\s/g, '').split('').sort().join('')
    let anaB = b.replace(/\s/g, '').split('').sort().join('')
    if (anaA === anaB) {
        return true
    }
    else {
        return false
    }
}
console.log(checkAnagram("Astronomer", "Moon starer"));


