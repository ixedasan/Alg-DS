class QueueArray {
	constructor() {
		this.items = []
		this.head = 0
		this.tail = 0
	}

	size() {
		return this.tail - this.head
	}

	isEmpty() {
		return this.size() === 0
	}

	enqueue(element) {
		this.items[this.tail] = element
		this.tail++
		console.log(`Додано елемент: ${element}`)
	}

	dequeue() {
		if (this.isEmpty()) {
			console.log('Черга порожня!')
			return undefined
		}

		const item = this.items[this.head]
		this.items[this.head] = undefined
		this.head++

		if (this.head > 100 && this.head >= this.size()) {
			this.items = this.items.slice(this.head)
			this.tail = this.tail - this.head
			this.head = 0
		}

		if (this.isEmpty()) {
			this.head = 0
			this.tail = 0
			this.items = []
		}

		console.log(`Видалено елемент: ${item}`)
		return item
	}

	peek() {
		if (this.isEmpty()) {
			console.log('Черга порожня!')
			return undefined
		}
		return this.items[this.head]
	}

	print() {
		if (this.isEmpty()) {
			console.log('Черга порожня!')
			return
		}

		console.log('Елементи черги (від початку до кінця):')
		let result = []
		for (let i = this.head; i < this.tail; i++) {
			result.push(this.items[i])
		}
		console.log(result.join(' <- '))
		console.log(
			`Head: ${this.head}, Tail: ${this.tail}, Довжина масиву: ${this.items.length}`
		)
	}

	clear() {
		this.items = []
		this.head = 0
		this.tail = 0
		console.log('Черга очищена!')
	}
}

const queue = new QueueArray()

console.log('Черга порожня?', queue.isEmpty())

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)

queue.print()
console.log('Розмір черги:', queue.size())

console.log('Перший елемент:', queue.peek())

queue.dequeue()
queue.dequeue()

queue.print()
console.log('Розмір черги:', queue.size())

queue.enqueue(50)
queue.print()

console.time('Queue - 10000 операцій')
for (let i = 0; i < 10000; i++) {
	queue.enqueue(i)
}
for (let i = 0; i < 5000; i++) {
	queue.dequeue()
}
console.timeEnd('Queue - 10000 операцій')
queue.print()
