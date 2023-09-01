const removeFromArray = function(array, ...args) {
    return array.filter(x => !args.includes(x))
};


console.log(removeFromArray(['hey', 2, 3, 'ho'], '1', 3,));
// Do not edit below this line
module.exports = removeFromArray;

