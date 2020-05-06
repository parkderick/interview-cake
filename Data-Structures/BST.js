class Tree {
  constructor(node) {
    this.value = node;
    this.right = null;
    this.left = null;
  }
  insert(value) {
    var current = this;
    while (current) {
      if (value < current.value) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = new Tree(value);
          break;
        }
      } else {
        if (current.right) {
          current = current.right;
        } else {
          current.right = new Tree(value);
          break;
        }
      }
    }
  }
}

module.exports = Tree;