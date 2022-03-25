const mergeKLists = require('.');
const ListNode = require('./ListNode');

test("[[1,4,5],[1,3,4],[2,6]]", () => {
    const lists = [
        new ListNode(1, new ListNode(4, new ListNode(5))),
        new ListNode(1, new ListNode(3, new ListNode(4))),
        new ListNode(2, new ListNode(6))
    ];
    const result = mergeKLists(lists);
    expect(result.val).toEqual(1);
    expect(result.next.val).toEqual(1);
    expect(result.next.next.val).toEqual(2);
    expect(result.next.next.next.val).toEqual(3);
    expect(result.next.next.next.next.val).toEqual(4);
    expect(result.next.next.next.next.next.val).toEqual(4);
    expect(result.next.next.next.next.next.next.val).toEqual(5);
    expect(result.next.next.next.next.next.next.next.val).toEqual(6);
    expect(result.next.next.next.next.next.next.next.next).toBeNull();
});

test("[]", () => {
    const lists = [];
    const result = mergeKLists(lists);
    expect(result).toBeNull();
});

test("[[]]", () => {
    const lists = [null];
    const result = mergeKLists(lists);
    expect(result).toBeNull();
});


