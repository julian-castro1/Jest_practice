// A capitalize function that takes a string and returns it with the first character capitalized.
function capitalize(s){
    if(s.length === 0){ return s; }
    return s[0].toUpperCase() + toLower(s.slice(1));
}
function toLower(s){
    return s.split("").map(c => c.toLowerCase()).join("");
}

module.exports = capitalize;