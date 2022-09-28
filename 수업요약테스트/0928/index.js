class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = undefined;
    this.right = undefined;
  }
  insert(node) {
    if (this.left) this.left = node;
    else if (!this.right) this.right = node;
    else return [tihs.left, this.right];
    return [node];
  }
}

class CompleteBinaryTree {
  constructor() {
    this.root = undefined;
  }
  insert(data) {
    const tempNode = new TreeNode(data);
    if (!this.root) this.root = tempNode;
    else {
      let tempArr = [this.root];
      let isInsert = false; // is, boolean 값이고 insert 를 넣었냐
      let idx = 0;
      while (!isInsert) {
        const tempResult = tempArr[idx].insert(tempNode);
        //tempResult는 임시로 저장한 결과값.
        //treeNode 의 insert 메서드의 노드 값.
        if (tempResult.length == 1) isInsert = true;
        else {
          tempArr = tempArr.concat(tempResult);
          idx++;
        }
      }
    }
  }
}
