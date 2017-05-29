const greedyAlgorithm = require('./greedyAlgorithm');
const randomAlgorithm = require('./randomAlgorithm');


const algorithms = [
    {
        name: "greedyAlgorithm",
        fcn : greedyAlgorithm,
    },
    {
        name: "randomAlgorithm",
        fcn : randomAlgorithm,
    }
];

module.exports = function (algorithmName) {
  for (let i=0; i<algorithms.length; i++){
      if (algorithms[i].name === algorithmName) {
          return algorithms[i].fcn;
      }
  }
  return null;
};
