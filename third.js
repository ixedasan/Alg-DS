function createMatrix(rows, cols, minValue, maxValue) {
	const matrix = []
	for (let i = 0; i < rows; i++) {
		matrix[i] = []
		for (let j = 0; j < cols; j++) {
			matrix[i][j] =
				Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue
		}
	}
	return matrix
}

function printMatrix(matrix) {
	if (!matrix || matrix.length === 0) {
		console.log('Матриця порожня')
		return
	}

	const rows = matrix.length
	const cols = matrix[0].length

	let header = '           '
	for (let j = 0; j < cols; j++) {
		header += `стовпець ${j + 1}  `
	}
	console.log(header)

	for (let i = 0; i < rows; i++) {
		let row = `рядок ${i + 1}    `
		for (let j = 0; j < cols; j++) {
			row += `${matrix[i][j]}`.padStart(10) + '  '
		}
		console.log(row)
	}
	console.log()
}

function cyclicShift(matrix, k) {
	if (!matrix || matrix.length === 0) return matrix

	const rows = matrix.length
	const cols = matrix[0].length
	const newMatrix = Array.from({ length: rows }, () => Array(cols).fill(0))

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			if (i + k < rows && j - k < cols && i + k >= 0 && j - k >= 0) {
				newMatrix[i][j] = matrix[i + k][j - k]
			}
		}
	}

	return newMatrix
}

function sumAfterThirdElement(matrix) {
	if (!matrix || matrix.length === 0) return []

	const sums = []
	for (let i = 0; i < matrix.length; i++) {
		let rowSum = 0
		for (let j = 3; j < matrix[i].length; j++) {
			rowSum += matrix[i][j]
		}
		sums.push(rowSum)
	}
	return sums
}

function subtractRowAverage(matrix) {
	if (!matrix || matrix.length === 0) return matrix

	const result = []
	for (let i = 0; i < matrix.length; i++) {
		const rowSum = matrix[i].reduce((sum, val) => sum + val, 0)
		const rowAvg = rowSum / matrix[i].length
		result[i] = matrix[i].map(val => parseFloat((val - rowAvg).toFixed(2)))
	}
	return result
}

function removeMaxRowsAndCols(matrix) {
	if (!matrix || matrix.length === 0) return matrix

	let maxVal = matrix[0][0]
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] > maxVal) {
				maxVal = matrix[i][j]
			}
		}
	}

	const rowsToRemove = new Set()
	const colsToRemove = new Set()

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] === maxVal) {
				rowsToRemove.add(i)
				colsToRemove.add(j)
			}
		}
	}

	const result = []
	for (let i = 0; i < matrix.length; i++) {
		if (!rowsToRemove.has(i)) {
			const newRow = []
			for (let j = 0; j < matrix[i].length; j++) {
				if (!colsToRemove.has(j)) {
					newRow.push(matrix[i][j])
				}
			}
			if (newRow.length > 0) {
				result.push(newRow)
			}
		}
	}

	return result
}

function swapMinMaxColumns(matrix) {
	if (!matrix || matrix.length === 0) return matrix

	let maxVal = matrix[0][0],
		minVal = matrix[0][0]
	let maxCol = 0,
		minCol = 0

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] > maxVal) {
				maxVal = matrix[i][j]
				maxCol = j
			}
			if (matrix[i][j] < minVal) {
				minVal = matrix[i][j]
				minCol = j
			}
		}
	}

	const result = matrix.map(row => [...row])
	for (let i = 0; i < result.length; i++) {
		const temp = result[i][maxCol]
		result[i][maxCol] = result[i][minCol]
		result[i][minCol] = temp
	}

	return result
}

function removeMaxRowAndCol(matrix) {
	if (!matrix || matrix.length === 0) return matrix

	let maxVal = matrix[0][0]
	let maxRow = 0,
		maxCol = 0

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] > maxVal) {
				maxVal = matrix[i][j]
				maxRow = i
				maxCol = j
			}
		}
	}

	const result = []
	for (let i = 0; i < matrix.length; i++) {
		if (i !== maxRow) {
			const newRow = []
			for (let j = 0; j < matrix[i].length; j++) {
				if (j !== maxCol) {
					newRow.push(matrix[i][j])
				}
			}
			result.push(newRow)
		}
	}

	return result
}

console.log('=== ДЕМОНСТРАЦІЯ РОБОТИ ===\n')

const matrix = createMatrix(4, 5, -10, 10)
console.log('Початкова матриця:')
printMatrix(matrix)

console.log('\n1. Циклічний зсув на k позиції вправо і догори:')
const shifted = cyclicShift(matrix, 2)
printMatrix(shifted)

console.log('\n2. Сума елементів після 3-го елемента кожного рядка:')
const sums = sumAfterThirdElement(matrix)
sums.forEach((sum, index) => {
	console.log(`Рядок ${index + 1}: ${sum}`)
})
console.log()

console.log('\n3. Відняти середнє арифметичне від кожного рядка:')
const subtracted = subtractRowAverage(matrix)
printMatrix(subtracted)

console.log('\n4. Видалити рядки і стовпці з максимальними елементами:')
const removed = removeMaxRowsAndCols(matrix)
printMatrix(removed)

console.log('\n5. Поміняти стовпці з max і min елементами:')
const swapped = swapMinMaxColumns(matrix)
printMatrix(swapped)

console.log('\n6. Видалити рядок і стовпець з максимальним елементом:')
const removedMax = removeMaxRowAndCol(matrix)
printMatrix(removedMax)
