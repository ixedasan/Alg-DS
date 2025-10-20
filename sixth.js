class StackArray {
	constructor() {
		this.items = []
		this.top = -1
	}

	peek() {
		if (this.isEmpty()) {
			console.log('Стек порожній.')
			return undefined
		}
		return this.items[this.top]
	}

	pop() {
		if (this.isEmpty()) {
			console.log('Стек порожній.')
			return undefined
		}
		this.top--
		return this.items.pop()
	}

	push(element) {
		this.items.push(element)
		this.top++
	}

	clear() {
		this.items = []
		this.top = -1
	}

	count() {
		return this.top + 1
	}

	size() {
		return this.top + 1
	}

	isEmpty() {
		return this.top === -1
	}

	toString() {
		if (this.isEmpty()) {
			return 'Стек порожній'
		}
		let result = 'Стек (зверху вниз):\n'
		for (let i = this.top; i >= 0; i--) {
			result += `[${i}]: ${this.items[i]}\n`
		}
		return result
	}
}

class Node {
	constructor(data) {
		this.data = data
		this.next = null
	}
}

class StackNodes {
	constructor() {
		this.top = null
		this.length = 0
	}

	peek() {
		if (this.isEmpty()) {
			console.log('Стек порожній.')
			return undefined
		}
		return this.top.data
	}

	pop() {
		if (this.isEmpty()) {
			console.log('Стек порожній.')
			return undefined
		}
		const data = this.top.data
		this.top = this.top.next
		this.length--
		return data
	}

	push(element) {
		const newNode = new Node(element)
		newNode.next = this.top
		this.top = newNode
		this.length++
	}

	clear() {
		this.top = null
		this.length = 0
	}

	count() {
		return this.length
	}

	size() {
		return this.length
	}

	isEmpty() {
		return this.top === null
	}

	toString() {
		if (this.isEmpty()) {
			return 'Стек порожній'
		}
		let result = 'Стек (зверху вниз):\n'
		let current = this.top
		let index = this.length - 1
		while (current !== null) {
			const address = current === this.top ? 'TOP' : '    '
			result += `${address} [${index}]: ${current.data}`
			if (current.next !== null) {
				result += ' -> '
			} else {
				result += ' -> null'
			}
			result += '\n'
			current = current.next
			index--
		}
		return result
	}
}

console.log('СТЕК НА ОСНОВІ МАСИВУ \n')
const stack = new StackArray()
console.log('Порожній стек:', stack.toString())
console.log('Розмір:', stack.size(), '\n')
console.log('Додаємо елементи 11, 22, 33')
stack.push(11)
stack.push(22)
stack.push(33)
console.log(stack.toString())
console.log('Розмір:', stack.size(), '\n')
console.log('Peek (вершина):', stack.peek(), '\n')
console.log('Pop (видаляємо):', stack.pop())
console.log('Після pop:')
console.log(stack.toString())
console.log('Розмір:', stack.count(), '\n')
stack.push(44)
stack.push(55)
console.log('Додали 44 та 55:')
console.log(stack.toString())
console.log('\nОчищаємо стек...')
stack.clear()
console.log(stack.toString())
console.log('Розмір:', stack.size())

console.log('\nСТЕК НА ОСНОВІ ВУЗЛІВ \n')
const stackNodes = new StackNodes()
console.log('Порожній стек:', stackNodes.toString())
console.log('Розмір:', stackNodes.size(), '\n')
console.log('Додаємо елементи 11, 22, 33')
stackNodes.push(11)
stackNodes.push(22)
stackNodes.push(33)
console.log(stackNodes.toString())
console.log('Розмір:', stackNodes.size(), '\n')
console.log('Peek (вершина):', stackNodes.peek(), '\n')
console.log('Pop (видаляємо):', stackNodes.pop())
console.log('Після pop:')
console.log(stackNodes.toString())
console.log('Розмір:', stackNodes.count(), '\n')
stackNodes.push(44)
stackNodes.push(55)
console.log('Додали 44 та 55:')
console.log(stackNodes.toString())
console.log('\nОчищаємо стек...')
stackNodes.clear()
console.log(stackNodes.toString())
console.log('Розмір:', stackNodes.size())

console.log('\n ПОРІВНЯННЯ РЕАЛІЗАЦІЙ \n')
const arrayStack = new StackArray()
const nodeStack = new StackNodes()
const testData = [10, 20, 30, 40, 50]
console.log('Додаємо елементи:', testData)
testData.forEach(item => {
	arrayStack.push(item)
	nodeStack.push(item)
})
console.log('\nСтек на масиві:')
console.log(arrayStack.toString())
console.log('\nСтек на вузлах:')
console.log(nodeStack.toString())
console.log('\n--- Порівняння методів ---')
console.log(`peek() - Масив: ${arrayStack.peek()}, Вузли: ${nodeStack.peek()}`)
console.log(`size() - Масив: ${arrayStack.size()}, Вузли: ${nodeStack.size()}`)
console.log('\nВидаляємо 2 елементи з обох стеків:')
console.log(`pop() - Масив: ${arrayStack.pop()}, Вузли: ${nodeStack.pop()}`)
console.log(`pop() - Масив: ${arrayStack.pop()}, Вузли: ${nodeStack.pop()}`)
console.log(
	`\nРозмір після pop - Масив: ${arrayStack.count()}, Вузли: ${nodeStack.count()}`
)
