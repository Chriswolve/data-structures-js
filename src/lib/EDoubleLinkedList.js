class ENode {
  constructor(value) {
    this.value = value;
    this.next = undefined;
    this.prev = undefined;
  }
}

class EDoubleLinkedList {
  
  constructor($_item = undefined) {
    this.length = 0;
    this.head = this.tail = new ENode($_item);
    $_item && this.length++;
  }

  toArray() {
    let pointer = this.head, out = [];
    while (pointer) {
      out.push(pointer.value);
      pointer = pointer.next;
    }
    return out;
  }

  addFirst($_item) {
    // Create a new node
    const node = new ENode($_item);

    if (this.length === 0) 
      this.head = this.tail = node;
    else {
      // Set the new element to the head
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++
  }

  addLast($_item) { // append
    const node = new ENode($_item);

    if (this.length === 0) 
      this.head = this.tail = node;

    else {
      // Set the new element to the tail
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++
  }

  getByIndex($_position) {

    if ($_position > this.length - 1 || $_position < 0) {
      throw new Error("List index out of bounds")
    }
    // true ->head // false-> tail
    const direction = this.length / 2 > $_position;
    let pointer = this.head;

    if (!direction) {
      pointer = this.tail;
      $_position = this.length - $_position - 1
    }

    while ($_position > 0) {
      pointer = direction ? pointer.next : pointer.prev;
      $_position--;
    }

    return pointer;
  }

  insert($_item, $_position) {
    if ($_position === 0) 
      return this.addFirst($_item)

    if ($_position === this.length) 
      return this.addLast($_item)

    const node = new ENode($_item);
    let pointer = this.getByIndex($_position);

    node.prev = pointer.prev;
    pointer.prev.next = node;
    pointer.prev = node;
    node.next = pointer;

    this.length++;
  }

  remove($_position) {
    let pointer = this.getByIndex($_position);

    if (pointer.next) 
      pointer.next.prev = pointer.prev;
    else 
      this.tail = pointer.prev;

    if (pointer.prev) 
      pointer.prev.next = pointer.next;
    else 
      this.head = pointer.next;

    this.length--;
  }

}

export default EDoubleLinkedList;