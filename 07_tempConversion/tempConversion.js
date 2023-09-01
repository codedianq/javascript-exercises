const convertToCelsius = function(fahrenheit) {
  let C = 5/9 * (fahrenheit - 32);
  let roundedC = Math.round(C * 10) / 10;
  return roundedC;
};

const convertToFahrenheit = function(celsius) {
  let F = celsius * (9/5) + 32;
  let roundedF = Math.round(F * 10) / 10;
  return roundedF;
};

console.log(convertToCelsius(-100));
console.log(convertToFahrenheit(-10));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
