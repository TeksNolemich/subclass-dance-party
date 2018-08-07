var makeBlinkyDancer1 = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass('blue-dancer')
};



makeBlinkyDancer1.prototype = Object.create(makeDancer.prototype)
makeBlinkyDancer1.prototype.constructor = makeBlinkyDancer1;

makeBlinkyDancer1.prototype.step = function() {

    makeDancer.prototype.step.call(this);
    this.$node.toggle();

  };