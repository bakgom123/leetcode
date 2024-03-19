class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        res = defaultdict(list) # define a dictionary with values as a list

        for s in strs:
            count = [0] * 26 # a-z 26개의 character로 되어있으니까
            for c in s:
                count[ord(c) - ord("a")] += 1 #increment the count of frequency of each character in the string.
            
            res[tuple(count)].append(s) # in Python, list cannot be keys, tuples are non mutable

        return res.values()