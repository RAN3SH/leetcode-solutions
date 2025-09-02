var findCenter = function(edges) {
    const n = edges.length + 1;
    const g = new Graph(n, edges);
    for (let u = 0; u < n; u++) {
        if (g.ind[u] > 1) return u;
    }
    return -1;
};

class Graph {
    constructor(n, edges) {
        this.n = n;
        this.adj = Array.from({ length: n }, () => []);
        this.ind = new Array(n).fill(0);

        for (const [u, v] of edges) {
            this.adj[u].push(v);
            this.adj[v].push(u);
            this.ind[u]++;
            this.ind[v]++;
        }
    }
}
