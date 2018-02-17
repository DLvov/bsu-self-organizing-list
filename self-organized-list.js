class Node {
    constructor(data = ' ') {
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
        var node5 = atNode(i);
        if(node5.data == data) {
          return node5;
        }
      }
      return null;
    }

    findIndex(Node) {
      for(var i = 0; i < this.length; i++) {
        if(at(i) == Node.data) return i;
      }
    }

    toArray() {
      var arr = [];
      for(var i = 0; i < this.length; i++)
        arr.push(at(i));
      return arr;
    }

    removeAt(index) {
      atNode(index-1).next = atNode(index).next;
      atNode(index+1).prev = atNode(index).prev;
      this.length--;
    }

    moveToFront(Node) {
      var dat1 = this.head.data;
      var dat2;
      this.head.data = Node.data;
      removeAt(findIndex(node)); //чтобы небыло повт узла кот двигаем вперед
      insert('I will die (T_T)');//чтобы размер остался тем же
      for(var i = 1; i < this.length; i++) {
        dat2 = at(i).data;
        at(i).data = dat1;
        dat1 = dat2;
      }
    }

    reorganize(data) {
      if(findNode(data) == false) return false;
      else moveToFront(findNode(data));
      return true;
    }

}

module.exports = {
    SelfOrganizedList,
    Node
};
