console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];
function arraySum(numbers) {
	let sum = 0;
	numbers.forEach((number) => {
	sum += number;
	});
	return sum;
}
console.log(arraySum(numbers));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

const book = {};
book.title = "Awaken the Giant Within by Anthony Robbins"
book.pages = 544;
book.readCount = 1;
book.info = function () {
	return this.title + ", " + this.pages + " pages," + " read " + this.readCount + " time.";
};

console.log(book.info());