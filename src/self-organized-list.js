class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class SelfOrganizedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
        this.queue[];
    }

    insert(data) {
      Node(data);
      this.queue.push(Node);
      this.tail = Node;
      if (this.head == null) this.head = this.tail;
      if (this.length !== 0) {
        Node N = this.queue.shift()
        this.prev = N;
        N.next = Node(data);
      };
      this.length++;
    }

    size() {
      return this.length;
    }

    at(index) {
      if (index < this.length)
      {
        if (index == 0) return this.head.data;
        Node N1 = this.head.next;
        for (var i = 1; i < index; i++) {
          N1 = N1.next;
        };
        return N1.data;
      }
      else return null;
    }

    atNode(index) {
      if (index < this.length)
      {
        if (index == 0) return this.head;
        Node N2 = this.head.next;
        for (var i = 1; i < index; i++) {
          N2 = N2.next;
        };
        return N2;
      }
      else return null;
    }

    findNode(data) {
      for(var i = 0; i < this.length; i++) {
        if(at(i) == data) return atNode(i);
      }
      return false;
    }

    findIndex(node) {
      for(var i = 0; i < this.length; i++) {
        if(at(i) == node.data) return i;
      }
    }

    toArray() {
      var arr[];
      for(var i = 0; i < this.length; i++)
        arr.push(at(i));
      return arr[];
    }

    removeAt(index) {
      atNode(index-1).next = atNode(index).next;
      atNode(index+1).prev = atNode(index).prev;
      this.length--;
    }

    moveToFront(node) {
      var dat1 = this.head.data;
      var dat2;
      this.head.data = node.data;
      removeAt(findIndex(node)); //чтобы небыло повт узла кот двигаем вперед
      insert('I will die (T_T)');//чтобы размер остался тем же
      for(var i = 1; i < this.length; i++) {
        dat2 = at(i).data;
        at(i).data = dat1;
        dat1 = dat2;
      }
    }

    reorganize(data) {
      if(!findNode(data)) return false;
      else moveToFront(findNode(data));
      return true;
    }

}

module.exports = {
    SelfOrganizedList,
    Node
};
