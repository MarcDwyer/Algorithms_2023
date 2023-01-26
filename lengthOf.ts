function lengthOfLongestSubstring(s: string): number {
  let left = 0;
  let right = 0;

  const set = new Set();

  let count = 0;

  while (right < s.length) {
    if (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    } else {
      set.add(s[right]);
      right++;
    }

    console.log({ set });
    count = Math.max(count, set.size);
  }

  return count;
}
console.log(lengthOfLongestSubstring("pwwkew"));
