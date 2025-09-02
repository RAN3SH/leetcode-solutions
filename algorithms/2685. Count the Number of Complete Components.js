var countCompleteComponents = function (n, edges) {
    let g = new Graph(n, edges);
    let components = g.getConnectedComponents();
    let completeCompCount = 0;
    for (let comp of components) {
        let numOfVertices = comp.length;
        let ind = comp.map(x => g.ind[x]);
        let setInd = new Set(ind);
        if (setInd.size === 1 && ind[0] === numOfVertices - 1) {
            completeCompCount++;
        }
    }
    return completeCompCount;
};

class Graph {
    constructor(n, edges = []) {
        this.n = n;
        this.adj = Array.from({ length: n }, () => []);
        this.ind = new Array(n).fill(0);
        this.vis = new Array(n).fill(false);

        for (let [u, v] of edges) {
            this.adj[u].push(v);
            this.adj[v].push(u);
            this.ind[u]++;
            this.ind[v]++;
        }
    }

    dfs(u, vis, comp) {
        vis[u] = true;
        comp.push(u);
        for (let v of this.adj[u]) {
            if (!vis[v]) this.dfs(v, vis, comp);
        }
    }

    getConnectedComponents() {
        let components = [];
        let vis = this.vis.slice();
        for (let u = 0; u < this.n; u++) {
            if (!vis[u]) {
                let comp = [];
                this.dfs(u, vis, comp);
                components.push(comp);
            }
        }
        return components;
    }
}
