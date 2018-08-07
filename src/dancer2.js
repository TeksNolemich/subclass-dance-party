var makeBlinkyDancer2 = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps)

  this.$node.addClass('yellow-dancer');

};

makeBlinkyDancer2.prototype = Object.create(makeDancer.prototype)
makeBlinkyDancer2.prototype.constructor = makeBlinkyDancer2;

// makeBlinkyDancer2.prototype.step = function() {

//     makeDancer.prototype.step.call(this);

//     //this.$node.toggle()

//   };