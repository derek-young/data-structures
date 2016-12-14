var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var key = someInstance.generateKey(value);
    storage[key] = value;
  };

  someInstance.generateKey = function(value) {
    var now = new Date().getTime;
    return now + value;
  };

  someInstance.dequeue = function() {
    var firstIndex = Object.keys(storage)[0];
    var temp = storage[firstIndex];
    delete storage[firstIndex];
    return temp;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
