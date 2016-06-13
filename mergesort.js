var mergeSort = function (arr) {
	if (arr.length <= 1) {
		return arr;
	} else {		 
		var secondHalf = arr.splice(arr.length / 2);
		var firstHalf = arr;
		var result1 = mergeSort(firstHalf);
		var result2 = mergeSort(secondHalf);
		return merge(result1, result2);
	}
};

var merge = function (arr1, arr2) {
	var index1 = 0;
	var index2 = 0;
	var mergedArr = [];
	while (index1 < arr1.length && index2 < arr2.length) {
		if (arr1[index1] < arr2[index2]) {
			mergedArr.push(arr1[index1]);
			index1++;
		} else {
			mergedArr.push(arr2[index2]);
			index2++;
		}
	}
	if (index1 < arr1.length) {
		mergedArr= mergedArr.concat(arr1.splice(index1));
	} else if (index2 < arr2.length) {
		mergedArr= mergedArr.concat(arr2.splice(index2));
	}
	return mergedArr;
};