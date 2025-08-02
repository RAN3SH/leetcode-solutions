    def buildArray(self, nums: List[int]) -> List[int]:
        a = []
        for i, x in enumerate(nums):
            a.append(nums[nums[i]])
        return a

    def buildArray2(self, nums: List[int]) -> List[int]:
        return [nums[x] for x in nums]
