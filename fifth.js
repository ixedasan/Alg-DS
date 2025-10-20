function quickSort(array, ascending = true) {
	const arr = [...array]

	quickSortRecursive(arr, 0, arr.length - 1, ascending)

	return arr
}

function quickSortRecursive(arr, low, high, ascending) {
	if (low < high) {
		const partitionIndex = partition(arr, low, high, ascending)
		quickSortRecursive(arr, low, partitionIndex - 1, ascending)
		quickSortRecursive(arr, partitionIndex + 1, high, ascending)
	}
}

function partition(arr, low, high, ascending) {
	const pivot = arr[high]
	let i = low

	for (let j = low; j < high; j++) {
		const shouldSwap = ascending ? arr[j] < pivot : arr[j] > pivot

		if (shouldSwap) {
			swap(arr, i, j)
			i++
		}
	}

	swap(arr, i, high)
	return i
}

function swap(arr, i, j) {
	const temp = arr[i]
	arr[i] = arr[j]
	arr[j] = temp
}

const testArray = [3, 7, 0, 1, 4, 2]

console.log('Оригінальний масив:', testArray)
console.log('Сортування за зростанням:', quickSort(testArray, true))
console.log('Сортування за спадання:', quickSort(testArray, false))

const array1 = [64, 34, 25, 12, 22, 11, 90]
console.log('\nМасив 1:', array1)
console.log('За зростанням:', quickSort(array1, true))
console.log('За спадання:', quickSort(array1, false))

const array2 = [5, 2, 8, 1, 9, 3, 7]
console.log('\nМасив 2:', array2)
console.log('За зростанням:', quickSort(array2, true))
console.log('За спадання:', quickSort(array2, false))

const array3 = [5, 2, 5, 1, 5, 3]
console.log('\nМасив з дублікатами:', array3)
console.log('За зростанням:', quickSort(array3, true))
console.log('За спадання:', quickSort(array3, false))

const array4 = [1, 2, 3, 4, 5]
console.log('\nВже відсортований масив:', array4)
console.log('За зростанням:', quickSort(array4, true))
console.log('За спадання:', quickSort(array4, false))
