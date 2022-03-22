
const removeNthFromEnd = require('.');
const ListNode = require('./ListNode');

test("[1,2,3,4,5] / 2", () => {
    const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
    const result = removeNthFromEnd(head, 2);
    expect(result.val).toEqual(1);
    expect(result.next.val).toEqual(2);
    expect(result.next.next.val).toEqual(3);
    expect(result.next.next.next.val).toEqual(5);
    expect(result.next.next.next.next).toBeNull();
});

test("[1,2] / 1", () => {
    const head = new ListNode(1, new ListNode(2));
    const result = removeNthFromEnd(head, 1);
    expect(result.val).toEqual(1);
    expect(result.next).toBeNull();
});

test("[1] / 1", () => {
    const head = new ListNode(1);
    const result = removeNthFromEnd(head, 1);
    expect(result).toBeNull();
});

