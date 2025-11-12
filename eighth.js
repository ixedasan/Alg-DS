class Node {
	constructor(value) {
		this.value = value
		this.left = null
		this.right = null
	}
}

class BinaryTree {
	constructor() {
		this.root = null
	}

	add(value) {
		const newNode = new Node(value)

		if (this.root === null) {
			this.root = newNode
			return
		}

		let current = this.root
		while (true) {
			if (value < current.value) {
				if (current.left === null) {
					current.left = newNode
					return
				}
				current = current.left
			} else {
				if (current.right === null) {
					current.right = newNode
					return
				}
				current = current.right
			}
		}
	}

	find(value) {
		let current = this.root

		while (current !== null) {
			if (value === current.value) {
				return true
			}
			if (value < current.value) {
				current = current.left
			} else {
				current = current.right
			}
		}
		return false
	}

	remove(value) {
		this.root = this._removeNode(this.root, value)
	}

	_removeNode(node, value) {
		if (node === null) {
			return null
		}

		if (value < node.value) {
			node.left = this._removeNode(node.left, value)
			return node
		} else if (value > node.value) {
			node.right = this._removeNode(node.right, value)
			return node
		} else {
			if (node.left === null && node.right === null) {
				return null
			}

			if (node.left === null) {
				return node.right
			}
			if (node.right === null) {
				return node.left
			}

			let minRight = this._findMin(node.right)
			node.value = minRight.value
			node.right = this._removeNode(node.right, minRight.value)
			return node
		}
	}

	_findMin(node) {
		while (node.left !== null) {
			node = node.left
		}
		return node
	}

	getMin() {
		if (this.root === null) {
			return null
		}
		let current = this.root
		while (current.left !== null) {
			current = current.left
		}
		return current.value
	}

	getMax() {
		if (this.root === null) {
			return null
		}
		let current = this.root
		while (current.right !== null) {
			current = current.right
		}
		return current.value
	}

	getAllElements() {
		const elements = []
		this._inOrderTraversal(this.root, elements)
		return elements
	}

	_inOrderTraversal(node, elements) {
		if (node !== null) {
			this._inOrderTraversal(node.left, elements)
			elements.push(node.value)
			this._inOrderTraversal(node.right, elements)
		}
	}

	getCount() {
		return this._countNodes(this.root)
	}

	_countNodes(node) {
		if (node === null) {
			return 0
		}
		return 1 + this._countNodes(node.left) + this._countNodes(node.right)
	}

	print() {
		this._printTree(this.root, '', true)
	}

	_printTree(node, prefix, isTail) {
		if (node === null) return

		console.log(prefix + (isTail ? '└── ' : '├── ') + node.value)

		if (node.left !== null || node.right !== null) {
			if (node.left !== null) {
				this._printTree(
					node.left,
					prefix + (isTail ? '    ' : '│   '),
					node.right === null
				)
			}
			if (node.right !== null) {
				this._printTree(node.right, prefix + (isTail ? '    ' : '│   '), true)
			}
		}
	}
}

const tree = new BinaryTree()

tree.add(10)
tree.add(5)
tree.add(15)
tree.add(3)
tree.add(7)
tree.add(12)
tree.add(20)

console.log('Структура дерева:')
tree.print()

console.log('\nВсі елементи:', tree.getAllElements())
console.log('Кількість елементів:', tree.getCount())
console.log('Найменший елемент:', tree.getMin())
console.log('Найбільший елемент:', tree.getMax())

console.log('\nПошук елемента 7:', tree.find(7))
console.log('Пошук елемента 100:', tree.find(100))

console.log('\nВидаляємо елемент 5')
tree.remove(5)
console.log('Всі елементи після видалення:', tree.getAllElements())

console.log('\nСтруктура дерева після видалення:')
tree.print()
