class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        return sorted(s) == sorted(t)
    

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
    	# 먼저 길이 체크
        if len(s) != len(t):
            return False
		# hashmap 만들기
        countS, countT = {}, {}
		
        # 길이가 같기 때문에 len(s)를 사용하나 len(t)를 사용하나 같음
        for i in range(len(s)):
            countS[s[i]] = 1 + countS.get(s[i], 0)
            countT[t[i]] = 1 + countT.get(t[i], 0)
        return countS == countT
    

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
    	return Counter(s) == Counter(t)