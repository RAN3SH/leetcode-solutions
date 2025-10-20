var climbStairs = function (n) {
	if (n <= 0) return 0;
	if (n === 1) return 1;
	if (n === 2) return 2;

	let dp = new Array(n + 1);
	dp[n] = 0;
	dp[n - 1] = 1;
	dp[n - 2] = 2;

	for (let i = n - 3; i >= 0; i--) {
		dp[i] = dp[i + 1] + dp[i + 2];
	}

	return dp[0];
};
