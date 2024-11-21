class ENode {
  constructor(value) {
    this.value = value;
    this.next = undefined;
  }
  isEmpty() {
    return this.value === undefined;
  }
}

class ELinkedList {
  
  constructor($_item = undefined) {
    this.length = 0,
      this.head = this.tail = new ENode($_item);
    $_item && this.length++
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

    if (this.length === 0) {
      this.head = this.tail = node;
    }
    else {
      // Set the new element to the head
      node.next = this.head;
      this.head = node;
    }
    this.length++
  }

  addLast($_item) {
    const node = new ENode($_item);

    if (this.length === 0) {
      this.head = this.tail = node;
    }
    else {
      // Set the new element to the tail
      this.tail.next = node;
      this.tail = node;
    }
    this.length++

  }

  insert($_item, $_position) {
    const node = new ENode($_item);
    let pointer = this.head;

    if($_position > this.length){
      throw new Error("List index out of bounds")
    }

    if($_position == 0){
      this.addFirst($_item); // prepend
      return;
    }
    
    while ($_position > 1) {
      pointer = pointer.next;
      $_position--;
    }

    node.next = pointer.next
    pointer.next = node;
    this.length++
  }

  remove($_position){
    let pointer = this.head;

    if($_position >= this.length){
      throw new Error("List index out of bounds")
    }

    if($_position == 0){
      this.head = this.head.next;
    }else{
      while ($_position > 1) {
        pointer = pointer.next;
        $_position--;
      }
  
      pointer.next = pointer.next.next
    }
    this.length --;

  }

}

export default ELinkedList;