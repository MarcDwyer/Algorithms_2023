function condense(head) {
  const set = new Set();

  set.add(head.data);

  let root = new SinglyLinkedList();
  root.data = head.data;

  let currRoot = root;

  let curr = head.next;

  while (curr) {
    if (!set.has(curr.data)) {
      currRoot = new SinglyLinkedList();
      currRoot.data = curr.data;
    }

    set.add(curr.data);
  }

  curr = curr.next;

  return root;
}
