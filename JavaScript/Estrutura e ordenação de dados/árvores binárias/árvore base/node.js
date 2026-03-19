class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Classe BinaryTree (usa Node)

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }
  
print(node = this.root, prefix = "", isLast = true) {
  if (node === null) return;
  
  const connector = isLast ? "└── " : "├── ";
  console.log(prefix + connector + node.value);
  
  const newPrefix = prefix + (isLast ? "    " : "│   ");
  this.print(node.left, newPrefix, true);
  this.print(node.right, newPrefix, false);
}


}

const tree = new BinaryTree();
tree.insert(50);  // RAIZ no meio
tree.insert(30);  // esquerda
tree.insert(70);  // direita
tree.insert(20);  // esquerda do 30
tree.insert(40);  // direita do 30
tree.insert(60);  // esquerda do 70
tree.insert(90);  // direita do 70
console.log(tree.root); 
console.log("Raiz:", tree.root.value);
console.log("Esquerda:", tree.root.left?.value || "null");
console.log("Direita:", tree.root.right?.value || "null");

tree.print();


