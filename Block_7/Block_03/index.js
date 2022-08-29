var NodeTree = /** @class */ (function () {
    function NodeTree(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    NodeTree.prototype.add = function (value) {
        if (value === this.value) {
            throw new Error("Value should be unique");
        }
        if (value > this.value) {
            if (this.right === null) {
                this.right = new NodeTree(value);
                return;
            }
            this.right.add(value);
        }
        else {
            if (this.left === null) {
                this.left = new NodeTree(value);
                return;
            }
            this.left.add(value);
        }
    };
    NodeTree.prototype.find = function (value) {
        if (value === this.value) {
            return this;
        }
        if (value > this.value && this.right) {
            return this.right.find(value);
        }
        if (value < this.value && this.left) {
            return this.left.find(value);
        }
        return null;
    };
    NodeTree.prototype["delete"] = function (value, thisNode) {
        thisNode = thisNode || this;
        if (value > thisNode.value) {
            if (thisNode.right === null) {
                return thisNode;
            }
            thisNode.right = this["delete"](value, thisNode.right);
            return thisNode;
        }
        else if (value < thisNode.value) {
            if (thisNode.left === null) {
                return thisNode;
            }
            thisNode.left = this["delete"](value, thisNode.left);
            return thisNode;
        }
        else if (value === thisNode.value) {
            if (thisNode.left === null && thisNode.right === null) {
                thisNode = null;
                return thisNode;
            }
            else if (thisNode.left === null) {
                thisNode = thisNode.right;
                return thisNode;
            }
            else if (thisNode.right === null) {
                thisNode = thisNode.left;
                return thisNode;
            }
            var minNode = this.findMinNode(thisNode.right);
            thisNode.value = minNode.value;
            thisNode.right = this["delete"](minNode.value, thisNode.right);
            return thisNode;
        }
        return thisNode;
    };
    NodeTree.prototype.findMinNode = function (thisNode) {
        thisNode = thisNode || this;
        if (thisNode.right !== null && thisNode.left !== null) {
            return this.findMinNode(thisNode.left);
        }
        else if (thisNode.left === null) {
            return thisNode;
        }
        else {
            throw new Error("Shouldn't be reachable");
        }
    };
    return NodeTree;
}());
//// сортировка пузырьком
Array.prototype.sortByBubble = function (callback) {
    var _a;
    if (typeof callback !== "function") {
        throw new Error("Parameter should be a callback function");
    }
    for (var i = 0; i < this.length; i++) {
        for (var j = 0; j < this.length - i - 1; j++) {
            if (callback(this[j], this[j + 1])) {
                _a = [this[j + 1], this[j]], this[j] = _a[0], this[j + 1] = _a[1];
            }
        }
    }
    return this;
};
//// сортировка выбором
Array.prototype.sortBySelection = function (callback) {
    var _a;
    if (typeof callback !== "function") {
        throw new Error("Parameter should be a callback function");
    }
    for (var i = 0; i < this.length; i++) {
        var min = i;
        for (var j = i; j < this.length; j++) {
            if (callback(this[min], this[j])) {
                min = j;
            }
        }
        _a = [this[min], this[i]], this[i] = _a[0], this[min] = _a[1];
    }
    return this;
};
