function generateArray(length, minValue, maxValue) {
	const array = []
	for (let i = 0; i < length; i++) {
		const randomValue =
			Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue
		array.push(randomValue)
	}
	return array
}

function displayArray(array) {
	const result = []
	for (let i = 0; i < array.length; i++) {
		result.push(`[cell - ${i},value - ${array[i]}]`)
	}
	return '{' + result.join(',') + '}'
}

function bubbleSort(array, ascending) {
	const arr = []
	for (let i = 0; i < array.length; i++) {
		arr.push(array[i])
	}

	const n = arr.length

	for (let i = 0; i < n - 1; i++) {
		for (let j = 0; j < n - i - 1; j++) {
			let shouldSwap = false

			if (ascending) {
				shouldSwap = arr[j] > arr[j + 1]
			} else {
				shouldSwap = arr[j] < arr[j + 1]
			}

			if (shouldSwap) {
				const temp = arr[j]
				arr[j] = arr[j + 1]
				arr[j + 1] = temp
			}
		}
	}

	return arr
}

function insertionSort(array, ascending) {
	const arr = []
	for (let i = 0; i < array.length; i++) {
		arr.push(array[i])
	}

	for (let i = 1; i < arr.length; i++) {
		const key = arr[i]
		let j = i - 1

		if (ascending) {
			while (j >= 0 && arr[j] > key) {
				arr[j + 1] = arr[j]
				j--
			}
		} else {
			while (j >= 0 && arr[j] < key) {
				arr[j + 1] = arr[j]
				j--
			}
		}

		arr[j + 1] = key
	}

	return arr
}

function selectionSort(array, ascending) {
	const arr = []
	for (let i = 0; i < array.length; i++) {
		arr.push(array[i])
	}

	const n = arr.length

	for (let i = 0; i < n - 1; i++) {
		let targetIndex = i

		for (let j = i + 1; j < n; j++) {
			if (ascending) {
				if (arr[j] < arr[targetIndex]) {
					targetIndex = j
				}
			} else {
				if (arr[j] > arr[targetIndex]) {
					targetIndex = j
				}
			}
		}

		if (targetIndex !== i) {
			const temp = arr[i]
			arr[i] = arr[targetIndex]
			arr[targetIndex] = temp
		}
	}

	return arr
}

const testArray = generateArray(10, 1, 100)

console.log('Початковий масив:', displayArray(testArray))
console.log('\nBUBBLE SORT')
console.log('Прямий порядок:', displayArray(bubbleSort(testArray, true)))
console.log('Зворотний порядок:', displayArray(bubbleSort(testArray, false)))

console.log('\nINSERTION SORT')
console.log('Прямий порядок:', displayArray(insertionSort(testArray, true)))
console.log('Зворотний порядок:', displayArray(insertionSort(testArray, false)))

console.log('\nSELECTION SORT')
console.log('Прямий порядок:', displayArray(selectionSort(testArray, true)))
console.log('Зворотний порядок:', displayArray(selectionSort(testArray, false)))
