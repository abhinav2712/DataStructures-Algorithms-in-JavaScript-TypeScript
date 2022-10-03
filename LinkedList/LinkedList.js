class Node {
  constructor(key) {
    this.key = key;
    this.left = undefined;
    this.right = undefined;
  }
}

class LinkedList {
  constructor(key) {
    this.head = null;
  }
  addElement(key) {
    let node = new Node(key);

    if (this.head == null) {
      this.head = node;
      return;
    } else {
      let temp = this.head;
      while (temp.right !== undefined) {
        temp = temp.right;
      }
      temp.right = node;
    }
  }

  addElementatHead(key) {
    let node = new Node(key);
    if (this.head == null) {
      this.head = node;
      return;
    } else {
      node.right = this.head;
      this.head = node;
    }
  }
  traverse() {
    let temp = this.head;
    // console.log(temp.right);
    while (temp?.key != undefined) {
      console.log(temp.key);
      temp = temp.right;
    }
  }
  removeathead() {
    let temp = this.head;
    this.head = temp.right;
    temp = null;
  }
}

let LL = new LinkedList();
LL.addElement(1);
LL.addElement(1);
LL.addElement(1);
// LL.addElement(3);
// LL.addElement(3);

// LL.traverse();
// LL.removeathead()
// LL.traverse();

// LL.addElement(1);
// console.log(LL);
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function() {
  let temp=head,temp2=head,count=0;
  while(temp2.next!=null){
      count++;
      temp2=temp2.next;
  }
  console.log(count)
  for(let i=0;i<count;i++){
      if(temp?.val===temp?.next?.val) { temp.next=temp.next.next;}
      temp=temp.next
  }
  
  
  return head;
};