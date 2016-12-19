var PrefixTree = function() {
  var newPrefixTree = Object.create(prefixTreeMethods);
  newPrefixTree.words = {};
  newPrefixTree.branches = {};

  return newPrefixTree;
};

var prefixTreeMethods = {
  addWord: function(word, index) {
    word = word.toLowerCase() || '';
    index = index || 0;
    if(index === word.length) this.words[word] = word;
    else {
      var newNode = PrefixTree();
      var subBranch = this.branches[word.charAt(index)] || newNode;
      this.branches[word.charAt(index)] = subBranch;
      subBranch.addWord(word, index + 1);
    }
  },
  lookup: function(target) {
    var results = [];
    var branches = this.branches;
    for(var i = 0; results.length <= 10; i++) {
      var letter = target.charAt(i);
      if(branches[letter] === undefined && i >= target.length) {
        break;
      }
      if(i >= target.length - 1) {
        for(var word in branches[letter].words) {
          results.push(word);
        }
        pushBranches(branches[letter].branches);
      }
      branches = branches[letter].branches;
    }

    function pushBranches(branches) {
      for(var letter in branches) {
        for(var word in branches[letter].words) {
          results.push(word);
        }
        pushBranches(branches[letter].branches)
      }
    }
    return results;
  }
};
