const convertToCelsius = function(tempInFarenheit) {

  let tempInCelcius  = (tempInFarenheit - 32) * (5/9);
  let rounded = Math.round(tempInCelcius * 10) / 10;
  return rounded;

};

const convertToFahrenheit = function(tempInCelcius) {

  let tempInFarenheit = (tempInCelcius * (9/5)) + 32;
  let rounded = Math.round(tempInFarenheit * 10) / 10;
  return rounded;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
