class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class QueueLinkedList {
	constructor() {
		this.head = null
		this.tail = null
		this.length = 0
	}

	size() {
		return this.length
	}

	isEmpty() {
		return this.length === 0
	}

	enqueue(element) {
		const newNode = new Node(element)

		if (this.isEmpty()) {
			this.head = newNode
			this.tail = newNode
		} else {
			this.tail.next = newNode
			this.tail = newNode
		}

		this.length++
		console.log(`Додано елемент: ${element}`)
	}

	dequeue() {
		if (this.isEmpty()) {
			console.log('Черга порожня!')
			return undefined
		}

		const removedValue = this.head.value
		this.head = this.head.next

		if (this.head === null) {
			this.tail = null
		}

		this.length--
		console.log(`Видалено елемент: ${removedValue}`)

		return removedValue
	}

	peek() {
		if (this.isEmpty()) {
			console.log('Черга порожня!')
			return undefined
		}
		return this.head.value
	}

	print() {
		if (this.isEmpty()) {
			console.log('Черга порожня!')
			return
		}

		console.log('Елементи черги (від початку до кінця):')
		let result = []
		let current = this.head

		while (current !== null) {
			result.push(current.value)
			current = current.next
		}

		console.log(result.join(' <- '))
		console.log(`Розмір: ${this.length}`)
	}

	clear() {
		this.head = null
		this.tail = null
		this.length = 0
		console.log('Черга очищена!')
	}
}

const queue = new QueueLinkedList()

console.log('Черга порожня?', queue.isEmpty())

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)

queue.print()
console.log('Розмір черги:', queue.size())

console.log('\nПерший елемент:', queue.peek())

queue.dequeue()
queue.dequeue()

queue.print()

queue.enqueue(50)
queue.print()

const perfQueue = new QueueLinkedList()

console.time('Linked List - 10000 операцій')
for (let i = 0; i < 10000; i++) {
	perfQueue.enqueue(i)
}
for (let i = 0; i < 5000; i++) {
	perfQueue.dequeue()
}
console.timeEnd('Linked List - 10000 операцій')
console.log(`Фінальний розмір: ${perfQueue.size()}`)
