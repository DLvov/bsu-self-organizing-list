class Node {
    constructor(data = null) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
};

class SelfOrganizedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
        this.queue = [];
    }

    insert(data) {
      var node1 = new Node();
      var node4 = new Node();
      node4.data = data;
      this.queue.push(node4);
      this.tail = node4;
      if (this.head == null) this.head = this.tail;
      if (this.length !== 0) {
        node1 = this.queue.shift()
        node4.prev = node1;
        node1.next = this.tail;
      };
      this.length++;
    }

    size() {
      return this.length;
    }

    at(index) {
      if (index < this.length)
      {
        var node2 = new Node();
        if (index == 0) return this.head.data;
        node2 = this.head.next;
        for (var i = 1; i < index; i++) {
          node2 = node2.next;
        };
        return node2.data;
      }
      else return null;
    }

    atNode(index) {
      if (index < this.length)
      {
        var node3 = new Node();
        if (index == 0) return this.head;
        node3 = this.head.next;
        for (var i = 1; i < index; i++) {
          node3 = node3.next;
        };
        return node3;
      }
      else return null;
    }

    findNode(data) {
      for(var i = 0; i < this.length; i++) {
        var node5 = this.atNode(i);
        if(node5.data == data) {
          return node5;
        }
      }
      return null;
    }

    findIndex(Node) {
      var array = this.toArray();
      return array.indexOf(Node.data);
    }

    toArray() {
      var arr = [];
      for(var i = 0; i < this.length; i++)
        arr.push(this.at(i));
      return arr;
    }

    removeAt(index) {
      if (index < 0 && index > this.length - 1) return;
      this.length--;
      if (this.length == 0) {
        this.head = this.tail = null;
        return;
      };
      if (index == 0) {
        this.head = this.head.next;
        this.head.prev = null;
        return;
      }
      var array = this.toArray();
      var curr = this.head;
      array.splice(index, 1);
      for (var i = 0; i < this.length; i++) {
        curr.data = array[i];
        if (i == this.length - 1) {
          this.tail = curr;
          this.tail.next = null;
        }
        else curr = curr.next;
      };
    }

    moveToFront(Node) {

      var array = this.toArray();
      var curr = this.head;
      array.splice(array.indexOf(Node.data), 1);
      array.unshift(Node.data);
      for (var i = 0; i < this.length; i++) {
        curr.data = array[i];
        curr = curr.next;
      }
    }

    reorganize(data) {
      if(this.findNode(data) == null) return false;
      else this.moveToFront(this.findNode(data));
      return true;
    }

}

module.exports = {
    SelfOrganizedList,
    Node
};
