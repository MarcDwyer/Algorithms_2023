var findAnagrams = function (s, p) {
  const map = new Map();

  for (const char of p) {
    map.set(char, (map.get(char) ?? 0) + 1);
  }

  let left = 0;

  let right = 0;

  let count = 0;

  const results = [];
  while (right < s.length) {
    if (map.has(s[right])) {
      count++;
    }

    if (count === p.length) {
      results.push(right - (p.length - 1));
      count = 0;
    }

    right++;
  }

  return results;
};

console.log(findAnagrams("cbaebabacd", "abc"));
