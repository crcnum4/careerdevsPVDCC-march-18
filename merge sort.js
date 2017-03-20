function mergeSort(numbers) {
	if (numbers.length < 2) {
		return numbers;
	}

	var middle = Math.floor(numbers.length / 2);
	var leftArray = numbers.slice(0, middle);
	var rightArray = numbers.slice(middle, numbers.length);

	//numbers: [4, 5, 8, 2] - leftArray: [4, 5] | rightArray: [8, 2]
	return merge(mergeSort(leftArray), mergeSort(rightArray));

}

// [4] [5]
function merge(leftArray, rightArray) {
	var resultArray = [];

	//[1, 2] [3, 4]
	//resultArray [1, 2, [3, 4]]
	var i = 0, j = 0

	while(leftArray.length != 0 && rightArray.length != 0) {
		if (leftArray[0] <= rightArray[0]) {
			resultArray.push(leftArray.shift());
		} else {
			resultArray.push(rightArray.shift());
		}
	}

	while (leftArray.length > 0) {
		resultArray.push(leftArray.shift());
	}

	while (rightArray.length > 0) {
		resultArray.push(rightArray.shift());
	}

	return resultArray

}

console.log(mergeSort([5, 6, 4, 3, 10, 8, 1]))

// [3, 5, 2, 4, 1]

// mergeSort[3, 5, 2, 4, 1]
// middle = 2
// return merge(mergeSort([3,5]) mergeSort([2, 4, 1])) // go to 54
// return merge([3,5] mergeSort([2, 4, 1])) // go to 70
// return merge([3, 5] [1, 2, 4]) // go to 99
// return [1, 2, 3, 4, 5] // done 

	// mergeSort[3, 5]
	// middle 1
	// return merge(mergeSort([3]) mergeSort([5])) go to 61
	// return merge([3] mergeSort[5]) go to 64
	// returm merge([3] [5]) go to 67
	// return [3,5]  go to 50

		// mergeSort[3]
		// return [3] go to 57

		// mergeSort [5]
		// return [5] go to 58

		// merge ([3] [5])
		// return rightArray[3,5] go to 59

	// mergeSort[2,4,1]
	// middle 1
	// return merge(mergeSort([2]) mergeSort([4, 1])) go to 77
	// return merge([2] mergeSort([4, 1])) go to 80
	// return merge([2] [1, 4]) go to 96
	// return [1, 2, 4] go to 51

		// mergeSort([2])
		// return [2] go to 73

		// mergeSort[4,1]
		// middle 1
		// return merge(mergeSort([1]) mergeSort([4]))go to 87
		// return merge([1] mergeSort[4]) go to 90
		// return merge([1] [4]) go to 93
		// return [1, 4] go to 74

			// mergeSort[4]
			// return [4] go to 83

			// mergeSort[1]
			// return [1] go to 84

			// merge([4] [1])
			// return resultArray([1, 4]) go to 85		

		// merge([2] [1, 4])
		// return resultArray[1, 2, 4] go to 75

	// merge[3, 5] [1, 2, 4]
	// return resultArray[1, 2, 3, 4, 5]




