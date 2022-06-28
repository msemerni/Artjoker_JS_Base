//// дерево
interface INodeTree {
  value: INodeTree | number;
  left: INodeTree | null;
  right: INodeTree | null;
  add (value: number): void;
  find (value: number): INodeTree | ((value: number) => any) | null;
  delete(value: number, thisNode: INodeTree | null): INodeTree | null;
  findMinNode(thisNode: INodeTree): INodeTree;
}

class NodeTree implements INodeTree {
  value: INodeTree | number;
  left: INodeTree | null;
  right: INodeTree | null;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(value: number): void {
    if(value === this.value) {
      throw new Error("Value should be unique");
    }

    if(value > this.value) {
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
  }

  find(value: number): NodeTree | ((value: number) => any) | null {
    if(value === this.value) {
      return this;
    }
    if(value > this.value && this.right) {
      return this.right.find(value);
    }
    if(value < this.value && this.left) {
      return this.left.find(value);
    }
    return null;
  }

  delete(value: number | NodeTree, thisNode: NodeTree | null): NodeTree | null {
    thisNode = thisNode || this;

    if(value > thisNode.value) {
      if(thisNode.right === null) {
        return thisNode;
      }
      thisNode.right = this.delete(value, thisNode.right);
      return thisNode;
    } else if (value < thisNode.value) {
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

  findMinNode(thisNode: NodeTree): NodeTree {
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
Array.prototype.sortByBubble = function(callback) {
  if(typeof callback !== "function") {
    throw new Error("Parameter should be a callback function");
  }

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
Array.prototype.sortBySelection = function(callback) {
  if(typeof callback !== "function") {
    throw new Error("Parameter should be a callback function");
  }

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
