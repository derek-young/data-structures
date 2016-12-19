describe('prefixTree', function() {
  var prefixTree;

  beforeEach(function() {
    prefixTree = PrefixTree();
  });

  it('should have methods named "addWord" and "lookup", and a property named "value"', function() {
    expect(prefixTree.addWord).to.be.a('function');
    expect(prefixTree.lookup).to.be.a('function');
  });

  it('should add new words to the tree', function() {
    prefixTree.addWord('he');
    prefixTree.addWord('heal');
    prefixTree.addWord('heap');
    prefixTree.addWord('hell');
    prefixTree.addWord('hello');
    expect(prefixTree.lookup('he')).to.contain('hello');
  });

  it('should be case insensitive', function() {
    prefixTree.addWord('World');
    expect(prefixTree.lookup('wor')).to.contain('world');
  });

  it('should take an input and return all available words', function() {
    prefixTree.addWord('pi');
    prefixTree.addWord('pig');
    prefixTree.addWord('piglet');
    expect(prefixTree.lookup('pi')).to.eql(['pi', 'pig', 'piglet']);
  });
});
