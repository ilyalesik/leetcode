
const swapPairs = require('.');
const ListNode = require('./ListNode');

test("[1,2,3,4]", () => {
    const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
    const result = swapPairs(head);
    expect(result.val).toEqual(2);
    expect(result.next.val).toEqual(1);
    expect(result.next.next.val).toEqual(4);
    expect(result.next.next.next.val).toEqual(3);
    expect(result.next.next.next.next).toBeNull();
});

test("[1]", () => {
    const head = new ListNode(1);
    const result = swapPairs(head);
    expect(result.val).toEqual(1);
    expect(result.next).toBeNull();
});

test("[]", () => {
    const head = null;
    const result = swapPairs(head);
    expect(result).toBeNull();
});
