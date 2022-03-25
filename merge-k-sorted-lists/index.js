const ListNode = require('./ListNode');
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let result;
    let endItem;

    let currentLists = lists;

    while (true) {
        if (currentLists.length === 0) {
            break;
        }

        let min = null;
        let minIdx;

        for (let i = 0; i < currentLists.length; i++) {
            if (currentLists[i] === null) {
                continue;
            }
            if (min === null || currentLists[i].val < min) {
                min = currentLists[i].val;
                minIdx = i;
            }
        }

        if (min === null) {
            break;
        }

        const newItem = new ListNode(currentLists[minIdx].val);
        if (!result) {
            result = newItem
        }
        if (endItem) {
            endItem.next = newItem;
        }
        endItem = newItem;

        currentLists = currentLists.map((item, idx) => idx === minIdx ? item.next : item).filter((item) => !!item);
    }
    return result || null;
};

module.exports = mergeKLists;
