function rob(nums: number[]): number {
  if (nums.length <= 2) {
    return Math.max(nums[0], nums[1] ?? 0);
  }
  const dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    const next = dp[i - 2] + nums[i];
    dp[i] = Math.max(dp[i - 1], next);
  }

  return dp[dp.length - 1];
}

console.log(rob([2, 7, 9, 3, 1]));
console.log(rob([0]));
console.log(rob([2, 1, 1, 2]));
