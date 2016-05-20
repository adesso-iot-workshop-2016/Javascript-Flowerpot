var data = [
  0.32
]

var nextRandom = function (last, maxStepSize, boundary) {
  var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  var step = (Math.random() * (maxStepSize)) * plusOrMinus;
  var next = last + step;

  return (next > boundary || next < 0) ? (last - step) : next;
}

window.setInterval(function() {
  var lastData = data[data.length - 1];
  data.push(nextRandom(lastData, 0.05, 1));
}, 1000);

export default {
  data: data
};

import './Wunderbar.js'
