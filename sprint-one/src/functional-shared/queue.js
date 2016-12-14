var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.storage = {};
  _.extend(instance, queueMethods);
  return instance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.size()] = value;
  },
  dequeue: function() {
    if (this.size() > 0) {
      var temp = this.storage[0];
      for (var i = 1; i < this.size(); i++) {
        this.storage[i - 1] = this.storage[i];
      }
      delete this.storage[i - 1];
    }
    return temp;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};


