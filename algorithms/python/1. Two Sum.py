class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:

        prev_eles = {}

        for i, x in enumerate(nums):
            remaining = target - x

            if remaining in prev_eles:
                j = prev_eles[remaining]
                return [j, i]

            prev_eles[x] = i

    def twoSum2(self, nums: List[int], target: int) -> List[int]:

        for i, x in enumerate(nums):
            remaining = target - x

            for j, y in enumerate(nums):
                if y == remaining and i != j:
                    return [i, j]
