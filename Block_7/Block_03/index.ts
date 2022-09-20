//// Дерево

interface IComparable { 
  hashCode: () => number; 
} 

class NodeTree<T extends IComparable> {
  value: T;
  left: NodeTree<T> | null;
  right: NodeTree<T> | null;
  
  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(value: T): void {
    if(value.hashCode() > this.value.hashCode()) {
      if(this.right === null) {
        this.right = new NodeTree(value);
        return;
      }
      this.right.add(value);
    } else {
      if(this.left === null) {
        this.left = new NodeTree(value);
        return;
      }
      this.left.add(value);
    }
    if(value.hashCode() === this.value.hashCode()) {
      throw new Error("Value should be unique");
    }
  }

  find(value: T): NodeTree<T> | ((value: T) =>any) | null {
    if(value.hashCode() === this.value.hashCode()) {
      return this;
    }
    if(value.hashCode() > this.value.hashCode() && this.right) {
      return this.right.find(value);
    }
    if(value.hashCode() < this.value.hashCode() && this.left) {
      return this.left.find(value);
    }
    return null;
  }

  delete(value: T, thisNode: NodeTree<T> | null): NodeTree<T> | null {
    thisNode = thisNode || this;

    if(value.hashCode() > thisNode.value.hashCode()) {
      if(thisNode.right === null) {
        return thisNode;
      }
      thisNode.right = this.delete(value, thisNode.right);
      return thisNode;
    } else if (value.hashCode() < thisNode.value.hashCode()) {
        if (thisNode.left === null) {
          return thisNode;
        }
        thisNode.left = this.delete(value, thisNode.left);
        return thisNode;
    } else if (value === thisNode.value) {
        if(thisNode.left === null && thisNode.right === null) {
          thisNode = null;
          return thisNode;
        } else if (thisNode.left === null) {
          thisNode = thisNode.right;
          return thisNode;
        } else if (thisNode.right === null) {
          thisNode = thisNode.left;
          return thisNode;
        }
        let minNode = this.findMinNode(thisNode.right);
        thisNode.value = minNode!.value;
        thisNode.right = this.delete(minNode.value, thisNode.right);
        return thisNode;
    } 
    return thisNode;
  }

  findMinNode(thisNode: NodeTree<T>): NodeTree<T> {
    thisNode = thisNode || this;
    if(thisNode.right !== null && thisNode.left !== null) {
      return this.findMinNode(thisNode.left);
    } else if (thisNode.left === null) {
      return thisNode;
    } else {
      throw new Error("Shouldn't be reachable");
    }
  }
}


interface Array<T> {
  sortByBubble(callback: (firstElem: T, secondElem: T) => boolean): Array<T>;
  sortBySelection(callback: (firstElem: T, secondElem: T) => boolean): Array<T>;
}

//// сортировка пузырьком
Array.prototype.sortByBubble = function<T>(callback: Function): Array<T> {
    for(let i = 0; i < this.length; i++) {
      for(let j = 0; j < this.length - i - 1; j++) {
        if(callback(this[j], this[j + 1])) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }
  return this;
}

//// сортировка выбором
Array.prototype.sortBySelection = function<T>(callback: Function): Array<T> {
  for(let i = 0; i < this.length; i++) {
    let min = i;
    for(let j = i; j < this.length; j++) {
      if(callback(this[min], this[j])) {
        min = j;
      }
    }
    [this[i], this[min]] = [this[min], this[i]];
  }
  return this;
}
