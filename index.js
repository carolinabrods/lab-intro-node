class SortedList {
  // Iteration 1
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    // Iteration 2
    const newItemsLength = this.items.push(item);
    this.length = newItemsLength;

    // to make sort in ascending order
    function compareNumbers(a, b) {
      return a - b;
    }

    return this.items.sort(compareNumbers);
  }

  get(pos) {
    // Iteration 3
    if (pos >= this.length) {
      throw new Error('OutOfBounds');
    }

    return this.items[pos];
  }

  max() {
    // Iteration 4
    if (this.length <= 0) {
      throw new Error('EmptySortedList');
    }

    return this.items[this.length - 1];
  }

  min() {
    // Iteration 5
    if (this.length <= 0) {
      throw new Error('EmptySortedList');
    }

    return this.items[0];
  }

  sum() {
    // Iteration 6 - Bonus
    if (this.length <= 0) {
      return 0;
    } else {
      const sumFunction = this.items.reduce((acc, cur) => acc + cur, 0);

      return sumFunction;
    }
  }

  avg() {
    // Iteration 7 - Bonus

    if (this.length <= 0) {
      throw new Error('EmptySortedList');
    }

    return this.sum() / this.length;
  }
}

module.exports = SortedList;
