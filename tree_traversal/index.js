const treeTraversal = tree => {
  console.log(tree.v);
  if (tree.l) {
    treeTraversal(tree.l);
  }
  if (tree.r) {
    treeTraversal(tree.r);
  }
};

const tree = {
  v: '1',
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

treeTraversal(tree);

