function coinChange(coins: number[], amount: number): number {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i < dp.length; i++) {
    let tmp = Infinity;
    for (const coin of coins) {
      if (coin <= i) {
        const remaining = i - coin;
        tmp = Math.min(dp[remaining] + 1, tmp);
      }
    }
    dp[i] = Math.min(tmp, dp[i]);
  }
  const answer = dp[dp.length - 1];
  return answer === Infinity ? -1 : answer;
}

console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([1], 0));
console.log(coinChange([2], 3));
