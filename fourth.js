function print1ToN(i, n) {
	if (i > n) return
	process.stdout.write(i + ' ')
	print1ToN(i + 1, n)
}

function task1(n) {
	print1ToN(1, n)
	console.log()
}

function printAToB(a, b) {
	if (a === b) {
		process.stdout.write(a + ' ')
		return
	}
	process.stdout.write(a + ' ')
	if (a < b) {
		printAToB(a + 1, b)
	} else {
		printAToB(a - 1, b)
	}
}

function task2(a, b) {
	printAToB(a, b)
	console.log()
}

function isPowerOfTwo(n, power = 1) {
	if (power === n) return true
	if (power > n) return false
	return isPowerOfTwo(n, power * 2)
}

function task3(n) {
	if (isPowerOfTwo(n)) {
		console.log('YES')
	} else {
		console.log('NO')
	}
}

function sumOfDigits(n) {
	if (n === 0) return 0
	return (n % 10) + sumOfDigits(Math.floor(n / 10))
}

function task4(n) {
	console.log(sumOfDigits(n))
}

function printDigitsReverse(n) {
	if (n === 0) return
	process.stdout.write((n % 10) + ' ')
	printDigitsReverse(Math.floor(n / 10))
}

function task5(n) {
	printDigitsReverse(n)
	console.log()
}

function printDigitsNormal(n) {
	if (n === 0) return
	printDigitsNormal(Math.floor(n / 10))
	process.stdout.write((n % 10) + ' ')
}

function task6(n) {
	printDigitsNormal(n)
	console.log()
}

console.log('Задача 1: Від 1 до n')
task1(5)

console.log('\nЗадача 2: Від A до B')
task2(5, 1)

console.log('\nЗадача 3: Точна степінь двійки')
task3(8)
task3(3)

console.log('\nЗадача 4: Сума цифр числа')
task4(179)

console.log('\nЗадача 5: Цифри числа справа наліво')
task5(179)

console.log('\nЗадача 6: Цифри числа зліва направо')
task6(179)
