
const ListNode = require('./ListNode');

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let revertedList = revert(head);

    const nthElement = get(revertedList, n - 1);
    const nthMin1Element = get(revertedList, n - 2);
    if (nthElement && !nthMin1Element) {
        revertedList = nthElement.next;
    }else if (nthElement && nthMin1Element) {
        nthMin1Element.next = nthElement.next;
    }

    return revert(revertedList);
};

// [1, 2, 3] -> [3, 2, 1]
function revert(item, previous) {
    if (!item) {
        return null;
    }
    const newNode = new ListNode(item.val, previous);
    return !item.next ? newNode : revert(item.next, newNode);
}

function get(item, n) {
    return n === 0 ? item : item.next ? get(item.next, n - 1) : undefined;
}

module.exports = removeNthFromEnd;
