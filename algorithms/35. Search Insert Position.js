var searchInsert = function (nums, target) {
    return lowerBound(nums, target);
};

// >= target
function lowerBound(arr, target, lo = 0, hi = arr.length) {
	while (lo < hi) {
		const mid = Math.floor((lo + hi) / 2);

		if (arr[mid] < target) {
			lo = mid + 1; // Target is in the hi half
		} else if (arr[mid] >= target) {
			hi = mid; // Target is in the lo half
		}
	}

	return hi; // Target not found
}
