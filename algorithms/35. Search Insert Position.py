def searchInsert(nums, target):
    return lowerBound(nums, target)

# >= target
def lowerBound(arr, target, lo=0, hi=None):
    if hi is None:
        hi = len(arr)
    while lo < hi:
        mid = (lo + hi) // 2
        if arr[mid] < target:
            lo = mid + 1  # Target is in the hi half
        else:  # arr[mid] >= target
            hi = mid  # Target is in the lo half
    return hi  # Target not found
