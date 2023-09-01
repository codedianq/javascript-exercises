const repeatString = function(string, num) {
    if(num < 0) {
        return 'ERROR';
    }
    let holder = '';
    for(let i = 0; i < num; i++) {
        holder += string;
    }
    return holder;
}
console.log(repeatString('', 10));
// Do not edit below this line
module.exports = repeatString;
