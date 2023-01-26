import { delay } from "https://deno.land/std@0.79.0/async/mod.ts";

let counter = 0;

function test_async(): Promise<void> {
  return new Promise((res) => {
    setTimeout(() => {
      console.log(counter);
      counter++;
      res();
    }, 5500);
  });
}

type Node<T> = {
  value: T;
  next?: Node<T>;
};
class LinkedList<T> {
  head?: Node<T>;
  tail?: Node<T>;
  length: number;
  constructor() {
    this.head = undefined;
    this.length = 0;
    this.tail = undefined;
  }

  push(value: T) {
    const node = { value } as Node<T>;

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      if (this.tail) {
        this.tail.next = node;
      }
      this.tail = node;
    }
    this.length++;
    return this.tail;
  }

  pop() {
    const tail = this.tail;
    this.tail = undefined;

    let curr = this.head;

    while (curr) {
      if (curr.next === tail) {
        break;
      }
      curr = curr.next;
    }
    if (curr) {
      curr.next = undefined;
      this.tail = curr;
      let min = 0;
      if (this.head) {
        min = 1;
      }
      this.length = Math.max(min, this.length - 1);
    }
    return tail;
  }
  unshift() {
    const head = this.head;

    if (head && head.next) {
      this.head = head.next;
      head.next = undefined;
      this.length = Math.max(1, this.length - 1);
    } else if (head && !head.next) {
      this.head = undefined;
      this.length = 0;
    }

    return this.head;
  }
}

// const num_list = new LinkedList<number>();

// num_list.push(1);
// num_list.push(2);
// num_list.push(3);
// num_list.unshift();
// console.log({ num_list });
const list = new LinkedList<typeof test_async>();

for (let i = 0; i < 25; i++) {
  list.push(test_async);
}

async function buffer_requests() {
  const promises = new Array<Promise<void>>(3);

  let curr = list.head;
  for (let i = 0; i < 3; i++) {
    if (curr) {
      promises.push(curr?.value());
      curr = curr.next;
      list.unshift();
    }
  }

  await Promise.all(promises);
}

while (list.length !== 0) {
  await buffer_requests();
}
