var invertTree = function (root) {
    if (!root) return root

    function dfs(n) {
        if (!n) return n

        let leftSaved = n.left
        let rightSaved = n.right

        n.left = dfs(rightSaved)
        n.right = dfs(leftSaved)
        return n
    }

    return dfs(root)
};
