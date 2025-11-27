class Node {
	constructor(value) {
		this.value = value
		this.next = null
		this.prev = null
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null
		this.tail = null
		this.size = 0
	}

	addFirst(value) {
		const newNode = new Node(value)
		if (this.head === null) {
			this.head = newNode
			this.tail = newNode
		} else {
			newNode.next = this.head
			this.head.prev = newNode
			this.head = newNode
		}
		this.size++
	}

	addLast(value) {
		const newNode = new Node(value)
		if (this.tail === null) {
			this.head = newNode
			this.tail = newNode
		} else {
			newNode.prev = this.tail
			this.tail.next = newNode
			this.tail = newNode
		}
		this.size++
	}

	removeFirst() {
		if (this.head === null) {
			return null
		}
		const removedValue = this.head.value
		if (this.head === this.tail) {
			this.head = null
			this.tail = null
		} else {
			this.head = this.head.next
			this.head.prev = null
		}
		this.size--
		return removedValue
	}

	removeLast() {
		if (this.tail === null) {
			return null
		}
		const removedValue = this.tail.value
		if (this.head === this.tail) {
			this.head = null
			this.tail = null
		} else {
			this.tail = this.tail.prev
			this.tail.next = null
		}
		this.size--
		return removedValue
	}

	contains(value) {
		let current = this.head
		while (current !== null) {
			if (current.value === value) {
				return true
			}
			current = current.next
		}
		return false
	}

	getAt(index) {
		if (index < 0 || index >= this.size) {
			return null
		}
		let current = this.head
		for (let i = 0; i < index; i++) {
			current = current.next
		}
		return current.value
	}

	insertAt(index, value) {
		if (index < 0 || index > this.size) {
			return false
		}
		if (index === 0) {
			this.addFirst(value)
			return true
		}
		if (index === this.size) {
			this.addLast(value)
			return true
		}
		const newNode = new Node(value)
		let current = this.head
		for (let i = 0; i < index; i++) {
			current = current.next
		}
		newNode.next = current
		newNode.prev = current.prev
		current.prev.next = newNode
		current.prev = newNode
		this.size++
		return true
	}

	removeAt(index) {
		if (index < 0 || index >= this.size) {
			return null
		}
		if (index === 0) {
			return this.removeFirst()
		}
		if (index === this.size - 1) {
			return this.removeLast()
		}
		let current = this.head
		for (let i = 0; i < index; i++) {
			current = current.next
		}
		current.prev.next = current.next
		current.next.prev = current.prev
		this.size--
		return current.value
	}

	getMax() {
		if (this.head === null) {
			return null
		}
		let max = this.head.value
		let current = this.head.next
		while (current !== null) {
			if (current.value > max) {
				max = current.value
			}
			current = current.next
		}
		return max
	}

	getMin() {
		if (this.head === null) {
			return null
		}
		let min = this.head.value
		let current = this.head.next
		while (current !== null) {
			if (current.value < min) {
				min = current.value
			}
			current = current.next
		}
		return min
	}

	getSize() {
		return this.size
	}

	toString() {
		if (this.head === null) {
			return '{}'
		}
		let result = '{'
		let current = this.head
		let index = 0
		while (current !== null) {
			result += `[index:${index}; value:${current.value}]`
			if (current.next !== null) {
				result += ' '
			}
			current = current.next
			index++
		}
		result += '}'
		return result
	}

	addArrayAt(index, array) {
		if (index < 0 || index > this.size) {
			return false
		}
		for (let i = 0; i < array.length; i++) {
			this.insertAt(index + i, array[i])
		}
		return true
	}
}

const list = new DoublyLinkedList()
list.addLast(10)
list.addLast(20)
list.addLast(30)
list.addFirst(5)
console.log(list.toString())
console.log('Size:', list.getSize())
console.log('Max:', list.getMax())
console.log('Min:', list.getMin())
console.log('Contains 20:', list.contains(20))
console.log('Get at index 2:', list.getAt(2))
list.insertAt(2, 15)
console.log(list.toString())
list.removeAt(1)
console.log(list.toString())
list.addArrayAt(2, [100, 200, 300])
console.log(list.toString())
