function maxSubArray(nums: number[]): number {
  let max = nums[0];

  const dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let next = dp[i - 1] + nums[i];

    if (next < nums[i]) {
      dp[i] = nums[i];
    } else {
      dp[i] = next;
    }

    max = Math.max(dp[i], max);
  }
  return max;
}

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
console.log(maxSubArray([-2, 1]), 1);
