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
      for(var i = 0; i < this.length; i++) {
        if(this.at(i) == Node.data) return i;
      }
    }

    toArray() {
      var arr = [];
      for(var i = 0; i < this.length; i++)
        arr.push(this.at(i));
      return arr;
    }

    removeAt(index) {
      this.length--;
      if (index < 0 || index > this.length - 1) return;
      if (index == 0) {
        this.atNode(index + 1).prev = null;
        return;
      };
      if (index == this.length - 1) {
        this.atNode(index - 1).next = null;
        return;
      };
      this.atNode(index - 1).next = this.atNode(index).next;
      this.atNode(index + 1).prev = this.atNode(index).prev;
    }

    moveToFront(Node) {

      var dat1 = this.head.data;
      var dat2;
      if(this.head == Node) return;
      this.head.data = Node.data;
      for(var i = 1; i < this.findIndex(Node); i++) {
        dat2 = this.atNode(i).data;
        this.atNode(i).data = dat1;
        dat1 = dat2;
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
