const maxProfit = (prices) => {
  let buyIdx = 0;
  let sellIdx = 1;
  let maxProfit = 0;

  while (sellIdx < prices.length) {
    if (prices[buyIdx] < prices[sellIdx]) {
      let currentProfit = prices[sellIdx] - prices[buyIdx];
      maxProfit = Math.max(maxProfit, currentProfit);
    } else {
      buyIdx = sellIdx;
    }
    sellIdx++;
  }
  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0

// TC : O(n)
// SC : O(1)
