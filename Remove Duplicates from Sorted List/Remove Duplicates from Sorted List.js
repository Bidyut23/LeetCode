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
var deleteDuplicates = function(head) {
    let prev = null;
    let curr = head;
    
    while (curr !== null) {
      if (prev !== null && prev.val === curr.val) {
        prev.next = curr.next;
      } else {
        prev = curr;
      }
      
      curr = curr.next;
    }
    
    return head;  
  };