const ListNode = require('./ListNode');
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let tail = head;
    let previous = null;
    let previousPrevious = null;
    let idx = 0;
    let newHead;

    while (tail) {
        if (idx % 2 === 1) {
            let next = tail.next;
            tail.next = previous;
            previous.next = next;
            let temp = previous;
            previous = tail;
            tail = temp;
            if (previousPrevious) {
                previousPrevious.next = previous;
            }
            if (!newHead) {
                newHead = previous;
            }
        }
        previousPrevious = previous;
        previous = tail;
        tail = tail.next;
        idx += 1;
    }
    return newHead || head;
};

module.exports = swapPairs;
