#include <vector>
using namespace std;

int lowerBound(vector<int>& arr, int target, int lo = 0, int hi = -1) {
    if (hi == -1) hi = arr.size();
    while (lo < hi) {
        int mid = (lo + hi) / 2;
        if (arr[mid] < target) {
            lo = mid + 1; // Target is in the hi half
        } else { // arr[mid] >= target
            hi = mid; // Target is in the lo half
        }
    }
    return hi; // Target not found
}

int searchInsert(vector<int>& nums, int target) {
    return lowerBound(nums, target);
}
