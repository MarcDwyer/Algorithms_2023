var cloneGraph = function (node) {
  const map = new Map();

  function cloneNodes(node) {
    if (!node) return node;
    if (map.has(node)) {
      return map.get(node);
    }

    const newNode = new Node(node.val, node.neighbors);
    map.set(node, newNode);

    if (Array.isArray(node.neighbors)) {
      const newNeigh = [];
      for (const neighbor of newNode.neighbors) {
        newNeigh.push(cloneNodes(neighbor));
      }
      newNode.neighbors = newNeigh;
    } else if (newNode.neighbors) {
      return cloneNodes(newNode.neighbors);
    }

    return newNode;
  }

  return cloneNodes(node);
};

function cloneGraph2(node: Node | null): Node | null {
  const visited = new Map();
  console.log({ visited });

  function cloneNode(oldNode: Node) {
    if (!oldNode) return oldNode;
    if (visited.has(oldNode)) {
      return visited.get(oldNode);
    }
    const newNode = new Node(oldNode.val, oldNode.neighbors);
    visited.set(oldNode, newNode);

    if (Array.isArray(newNode.neighbors)) {
      const newNeigh = [];
      for (const neighbor of newNode.neighbors) {
        newNeigh.push(cloneNode(neighbor));
      }

      newNode.neighbors = newNeigh;
    } else if (newNode.neighbors) {
      return cloneNode(newNode.neighbors);
    }

    return newNode;
  }

  return cloneNode(node);
}
