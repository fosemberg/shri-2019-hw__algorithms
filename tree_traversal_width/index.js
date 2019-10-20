const data = [];

const treeTraversalWidth = (tree, floor) => {
  if (data[floor]) {
    data[floor].push(tree.v);
  } else {
    data[floor] = [tree.v];
  }
  if (tree.l) {
    treeTraversalWidth(tree.l, floor + 1);
  }
  if (tree.r) {
    treeTraversalWidth(tree.r, floor + 1);
  }
  return data;
};

const tree = {
  v: 'top',
  l: {
    v: 'l',
    l: {
      v: 'll',
      l: {
        v: 'lll'
      },
      r: {
        v: 'llr'
      }
    },
    r: {
      v: 'lr'
    }
  },
  r: {
    v: 'r',
    l: {
      v: 'rl'
    },
    r: {
      v: 'rr'
    }
  }
};

console.log('tree: ', tree);
const treeWidth =  treeTraversalWidth(tree, 0);
console.log('tree width:', treeWidth);
for (let floor of treeWidth) {
  for (let el of floor) {
    console.log(el);
  }
}

