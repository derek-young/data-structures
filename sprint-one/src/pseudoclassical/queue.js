var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.removed = 0;
  this.count = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Queue.prototype.dequeue = function() {
  if (this.size() > 0) {
    debugger;
    var temp = this.storage[this.removed];
    delete this.storage[this.removed];
    this.removed++;
    return temp;
  }
};

Queue.prototype.size = function() {
  return this.count - this.removed;
};
