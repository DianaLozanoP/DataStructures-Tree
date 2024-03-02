/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let toVisitStack = [this.root];
    let sumValues = 0;
    while (toVisitStack.length) {
      let current = toVisitStack.pop();
      if (current === null) {
        return sumValues;
      }
      sumValues += current.val;
      for (let child of current.children) {
        toVisitStack.push(child)
      }
    }
    return sumValues;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let toVisitStack = [this.root];
    let countEvens = 0;
    while (toVisitStack.length) {
      let current = toVisitStack.pop();
      if (current === null) {
        return countEvens;
      }
      if (current.val % 2 === 0) {
        countEvens += 1;
      }
      for (let child of current.children) {
        toVisitStack.push(child)
      }
    }
    return countEvens;

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let toVisitStack = [this.root];
    let countEvens = 0;
    while (toVisitStack.length) {
      let current = toVisitStack.pop();
      if (current === null) {
        return countEvens;
      }
      if (current.val > lowerBound) {
        countEvens += 1;
      }
      for (let child of current.children) {
        toVisitStack.push(child)
      }
    }
    return countEvens;
  }
}

module.exports = { Tree, TreeNode };
