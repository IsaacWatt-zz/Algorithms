/**
 * Linked List Jasmine tests
 */

let LinkedList = require('../linked-list');

describe('Basic Tests', function () {

    let list1 = new LinkedList(); 
    let list2 = new LinkedList();

    it('inserts, removes, stringifies, findByCallback, ...', function () {
      expect(list1.stringify()).toEqual('');
      
      list1.insertAtHead(1); 
      list2.insertAtTail(1);

      expect(list1.stringify()).toEqual('1');
      expect(list2.stringify()).toEqual('1');

      list1.insertAtHead(1); 
      list1.insertAtHead(2); 
      list1.insertAtHead(3);
        
      list2.insertAtTail(1); 
      list2.insertAtTail(2); 
      list2.insertAtTail(3);

      expect(list1.stringify()).toEqual('3->2->1->1');
      expect(list2.stringify()).toEqual('1->1->2->3');
      
      list1.insertAtTail(10); 
      list1.insertAtTail(11); 
      list1.insertAtTail(12);

      expect(list1.stringify()).toEqual('3->2->1->1->10->11->12');

      expect(function() {list1.insertIndex(1, 20)}).toThrowError;
      expect(function() {list1.insertIndex(1, -1)}).toThrowError;
      expect(function() {list1.insertIndex(1, 8)}).toThrowError;

      expect(function() {list2.insertIndex(1, -1)}).toThrowError;
      expect(function() {list2.insertIndex(1, 30)}).toThrowError;
      expect(function() {list2.insertIndex(1, 5)}).toThrowError;

      list1.insertIndex(0, 0); 
      expect(list1.stringify()).toEqual('0->3->2->1->1->10->11->12');
      list1.insertIndex(0, 0); 
      expect(list1.stringify()).toEqual('0->0->3->2->1->1->10->11->12');

      list1.removeIndex(0);
      expect(list1.stringify()).toEqual('0->3->2->1->1->10->11->12');

      list1.removeIndex(7);
      expect(list1.stringify()).toEqual('0->3->2->1->1->10->11');

      expect((list1.findByCallback(v => v == 1)).data).toEqual(1);
      expect((list1.findByCallback(v => v == "hello"))).toEqual(null);

      expect(function() {list1.removeIndex(7)}).toThrowError;
      expect(function() {list1.removeIndex(-1)}).toThrowError;
      expect(function() {list1.removeIndex(1.5)}).toThrowError;

      list1.removeFirst(); 
      expect(list1.stringify()).toEqual('3->2->1->1->10->11');

      list1.removeLast(); 
      expect(list1.stringify()).toEqual('3->2->1->1->10');
      expect((list1.findByCallback(v => v == 3)).data).toEqual(3);
      expect((list1.findByCallback(v => v == 3)).next.data).toEqual(2);
      expect((list1.findByCallback(v => v == 3)).next.next.data).toEqual(1);
      expect((list1.findByCallback(v => true)).data).toEqual(3);

      list1.removeFirst(); 
      expect(list1.stringify()).toEqual('2->1->1->10');
      
      list1.removeFirst(); 
      expect(list1.stringify()).toEqual('1->1->10');
      list1.removeLast(); 
      expect(list1.stringify()).toEqual('1->1');
      list1.removeLast(); 
      expect(list1.stringify()).toEqual('1');
      list1.removeLast(); 
      expect(list1.stringify()).toEqual('');
      expect((list1.findByCallback(v => true))).toEqual(null);

      expect(function() {list2.removeIndex(0)}).toThrowError;
      expect(function() {list2.removeFirst()}).toThrowError;
      expect(function() {list2.removeLast()}).toThrowError;
    });

  });