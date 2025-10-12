var fib = function (n) {
    let memo = new Map();
    memo.set(0, 0);
    memo.set(1, 1);

    var dp = function (n) {
        if (memo.has(n)) return memo.get(n);

        let result = dp(n - 1) + dp(n - 2)

        memo.set(n, result);
        return result
    };

    return dp(n);
};
