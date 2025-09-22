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
		result.push(`[елемент_${i + 1}_значення_${array[i]}]`)
	}
	return result.join(', ')
}

function countAndSumEvenInRange(array, minRange, maxRange) {
	let count = 0
	let sum = 0

	for (let i = 0; i < array.length; i++) {
		const element = array[i]
		if (element >= minRange && element <= maxRange && element % 2 === 0) {
			count++
			sum += element
		}
	}

	return { count, sum }
}

function calculateAverageAndCountGreater(array) {
	let sum = 0
	for (let i = 0; i < array.length; i++) {
		sum += array[i]
	}

	const average = sum / array.length
	let countGreater = 0

	for (let i = 0; i < array.length; i++) {
		if (array[i] > average) {
			countGreater++
		}
	}

	return { average, countGreater }
}

function pairwiseSum(array1, array2) {
	const minLength = Math.min(array1.length, array2.length)
	const result = []

	for (let i = 0; i < minLength; i++) {
		result.push(array1[i] + array2[i])
	}

	return result
}

function concatenateArrays(array1, array2) {
	const result = []

	for (let i = 0; i < array1.length; i++) {
		result.push(array1[i])
	}

	for (let i = 0; i < array2.length; i++) {
		result.push(array2[i])
	}

	return result
}

function swapMinMax(array) {
	if (array.length === 0) return array

	const result = []
	let minIndex = 0
	let maxIndex = 0

	for (let i = 0; i < array.length; i++) {
		result.push(array[i])

		if (array[i] < array[minIndex]) {
			minIndex = i
		}
		if (array[i] > array[maxIndex]) {
			maxIndex = i
		}
	}

	const temp = result[minIndex]
	result[minIndex] = result[maxIndex]
	result[maxIndex] = temp

	return result
}

function splitBySign(array) {
	const positive = []
	const negative = []

	for (let i = 0; i < array.length; i++) {
		if (array[i] > 0) {
			positive.push(array[i])
		} else if (array[i] < 0) {
			negative.push(array[i])
		}
	}

	return { positive, negative }
}

function removeDuplicatesOfMinMax(array) {
	if (array.length === 0) return array

	let min = array[0]
	let max = array[0]

	for (let i = 1; i < array.length; i++) {
		if (array[i] < min) min = array[i]
		if (array[i] > max) max = array[i]
	}

	const result = []
	let minFound = false
	let maxFound = false

	for (let i = 0; i < array.length; i++) {
		const element = array[i]

		if (element === min && !minFound) {
			result.push(element)
			minFound = true
		} else if (element === max && !maxFound && element !== min) {
			result.push(element)
			maxFound = true
		} else if (element !== min && element !== max) {
			result.push(element)
		}
	}

	return result
}

function elementsBetweenAverages(array1, array2) {
	const average1 = calculateAverage(array1)
	const average2 = calculateAverage(array2)

	const minAverage = Math.min(average1, average2)
	const maxAverage = Math.max(average1, average2)

	const result = []

	for (let i = 0; i < array1.length; i++) {
		if (array1[i] >= minAverage && array1[i] <= maxAverage) {
			result.push(array1[i])
		}
	}

	for (let i = 0; i < array2.length; i++) {
		if (array2[i] >= minAverage && array2[i] <= maxAverage) {
			result.push(array2[i])
		}
	}

	return result
}

function calculateAverage(array) {
	if (array.length === 0) return 0

	let sum = 0
	for (let i = 0; i < array.length; i++) {
		sum += array[i]
	}

	return sum / array.length
}

const array1 = generateArray(10, -50, 50)
const array2 = generateArray(8, -30, 30)

console.log('Масив 1:', displayArray(array1))
console.log('Масив 2:', displayArray(array2))

console.log('\n==================')

const evenResult = countAndSumEvenInRange(array1, -20, 20)
console.log(
	`1. Парні в діапазоні [-20, 20]: кількість = ${evenResult.count}, сума = ${evenResult.sum}`
)

const avgResult = calculateAverageAndCountGreater(array1)
console.log(
	`2. Середнє = ${avgResult.average.toFixed(2)}, більших за середнє = ${
		avgResult.countGreater
	}`
)

const pairSum = pairwiseSum(array1, array2)
console.log('3. Попарна сума:', displayArray(pairSum))

const concat = concatenateArrays(array1, array2)
console.log('4. Конкатенація:', displayArray(concat))

const swapped = swapMinMax(array1)
console.log('5. Після заміни мін/макс:', displayArray(swapped))

const splitResult = splitBySign(array1)
console.log('6. Додатні:', displayArray(splitResult.positive))
console.log("Від'ємні:", displayArray(splitResult.negative))

const noDuplicates = removeDuplicatesOfMinMax(array1)
console.log('7. Без дублікатів мін/макс:', displayArray(noDuplicates))

const betweenAvg = elementsBetweenAverages(array1, array2)
console.log('8. Елементи між середніми:', displayArray(betweenAvg))
