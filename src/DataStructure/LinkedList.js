export class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(data) {
    // create a new node
    const newNode = new ListNode(data);

    //special case: no items in the list yet
    if (this.head === null) {
      // just set the head to the new node
      this.head = newNode;
    } else {
      // start out by looking at the first node
      let current = this.head;

      // follow `next` links until you reach the end
      while (current.next !== null) {
        current = current.next;
      }

      // assign the node into the `next` pointer
      current.next = newNode;
    }

    this.size++;
  }

  remove(val) {
    var current = this.head;
    var prev = null;

    // iterate over the list
    while (current != null) {
      // comparing val with current
      // val if found then remove the
      // and return true
      if (current.val === val) {
        if (prev == null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return current.val;
      }
      prev = current;
      current = current.next;
    }

    return -1;
  }

  isEmpty() {
    return this.size === 0;
  }

  // finds the index of val
  indexOf(val) {
    var count = 0;
    var current = this.head;

    // iterae over the list
    while (current != null) {
      // compare each val of the list
      // with given val
      if (current.val === val) return count;
      count++;
      current = current.next;
    }

    // not found
    return -1;
  }

  get(index) {
    var current = this.head;
    let i = 0;
    while (current !== null && i < index) {
      current = current.next;
      i++;
    }

    if (current !== null) return current.val;

    return null;
  }
  // prints the list items
  printList() {
    var curr = this.head;
    var result = [];
    while (curr) {
      result.push({ val: curr.val, cost: curr.cost });
      curr = curr.next;
    }
    return result;
  }
}
