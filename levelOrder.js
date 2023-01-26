var levelOrder = function (root) {
  let result = [];

  let queue = [root];

  while (queue.length > 0) {
    for (let i = 0; i < queue.length; i++) {
      const node = queue.shift();
      result.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return result;
};

var levelOrder2 = function (root) {
  if (!root) return [];
  const results = [];
  let queue = [root];

  while (queue.length) {
    const level = [];
    const newQueue = [];
    for (const node of queue) {
      level.push(node.val);
      if (node.left) newQueue.push(node.left);
      if (node.right) newQueue.push(node.right);
    }
    results.push(level);
    queue = newQueue;
  }
  return results;
};
