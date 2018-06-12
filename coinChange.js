/*
  You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

  Example 1:

  Input: coins = [1, 2, 5], amount = 11
  Output: 3 
  Explanation: 11 = 5 + 5 + 1
  Example 2:

  Input: coins = [2], amount = 3
  Output: -1
  Note:
  You may assume that you have an infinite number of each kind of coin.
*/

const coinChange = (coins, amount) => {
  if (amount < 1) {
      return 0;
  }
  // amount + 1 because for 30 units a valid coin coint is 30 given 1 unit coins
  let maxCount = amount + 1;
  // initialize to maxCount to make checks easier later 
  // let table = new Array(amount + 1).fill(maxCount);
  let table = [];
  
  // indices track amount value - 0 coins are required to make 0 currency units
  table[0] = 0;
  
  for (let i = 1; i <= amount; i++) {
      table[i] = maxCount;
      for (let j = 0; j < coins.length; j++) {
          if (coins[j] <= i) {
              table[i] = Math.min(table[i], table[i - coins[j]] + 1);
          }
      }
  }
  
  let result = table[amount];
  return result > amount ? -1 : result;
};

/*
  ANALYSIS:
    Time complexity is O(amount * coins.length)
    Space complexity is O(amount)
    Runtime beats 96.20% of LeetCode solutions
*/