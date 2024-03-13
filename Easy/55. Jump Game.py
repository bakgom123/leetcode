class Solution:
    def canJump(self, nums: List[int]) -> bool:
        n = len(nums)
        max_reachable = 0

        for i in range(n):
            if i > max_reachable:
                return False
            elif max_reachable == n:
                return True
            max_reachable = max(max_reachable, i + nums[i])
        return True