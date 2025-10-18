var canVisitAllRooms = function (adjacencyList) {
    let n = adjacencyList.length
    let g = new Graph({
        n,
        isDirected: true,
        oneIndexedVertices: false,
        adjacencyList,
    });
    let visitedVertexOrder = g.bfs(0)
    return (visitedVertexOrder.length === n)
};
class Graph {
    n;
    isDirected;
    oneIndexedVertices;
    // ======
    from;
    to;
    edges;
    // ======
    adjacencyList;
    // =======================
    inDegree;
    outDegree;
    // ======
    visitedAllComponents;
    components;
    // ======
    constructor({
        n = 0,
        isDirected = true,
        from = [],
        to = [], //
        edges = [],
        oneIndexedVertices = false,
        adjacencyList = [],
    } = {}) {
        this.n = n;
        this.isDirected = isDirected;
        this.from = from;
        this.to = to;
        this.edges = edges;
        this.oneIndexedVertices = oneIndexedVertices;
        this.inDegree = Array(this.n).fill(0);
        this.outDegree = Array(this.n).fill(0);
        this.visitedAllComponents = new Array(this.n).fill(false);
        this.components = [];
        if (adjacencyList.length !== 0) {
            this.adjacencyList = adjacencyList;
            for (let u = 0; u < this.n; u++) {
                for (let v of this.adjacencyList[u]) {
                    this.outDegree[u]++;
                    this.inDegree[v]++;
                    if (this.isDirected === false) {
                        this.outDegree[v]++;
                        this.inDegree[u]++;
                    }
                }
            }
        } else {
            this.adjacencyList = Array.from({ length: this.n }, () => []);
            if (this.from.length) {
                this.edges = [];
                for (let i = 0; i < this.from.length; i++) {
                    let [u, v] = [this.from[i], this.to[i]];
                    if (this.oneIndexedVertices) {
                        u--;
                        v--;
                    }
                    this.edges.push([u, v]);
                    this.addEdge(u, v);
                }
            } else {
                for (let i = 0; i < this.edges.length; i++) {
                    let [u, v] = this.edges[i];
                    if (this.oneIndexedVertices) {
                        u--;
                        v--;
                        this.edges[i] = [u, v];
                    }
                    this.addEdge(u, v);
                }
            }
        }
    }
    addEdge(u, v) {
        // u -> v
        this.outDegree[u]++;
        this.inDegree[v]++;
        this.adjacencyList[u].push(v);
        if (this.isDirected === false) {
            // v -> u
            this.outDegree[v]++;
            this.inDegree[u]++;
            this.adjacencyList[v].push(u);
        }
    }
    dfsPaths(source = 0, destination = this.n - 1) {
        let allPaths = [];
        let visited = new Array(this.n).fill(false);
        const dfsInternal = (u, path) => {
            if (visited[u]) return;
            visited[u] = true;
            path.push(u);
            if (u === destination) {
                allPaths.push([...path]);
                visited[u] = false;
                path.pop();
                return;
            }
            for (let v of this.adjacencyList[u]) {
                dfsInternal(v, path);
            }
            visited[u] = false;
            path.pop();
        };
        dfsInternal(source, []);
        return allPaths;
    }
    dfsGetComponents(u) {
        if (this.visitedAllComponents[u]) return;
        let component = [];
        let visitedComponent = new Array(this.n).fill(false);
        const dfsInternal = u => {
            if (visitedComponent[u]) return;
            visitedComponent[u] = true;
            this.visitedAllComponents[u] = true;
            component.push(u);
            for (let v of this.adjacencyList[u]) {
                dfsInternal(v);
            }
        };
        dfsInternal(u);
        this.components.push(component);
    }
    getComponents() {
        this.components = [];
        this.visitedAllComponents.fill(false);
        for (let u = 0; u < this.n; u++) {
            this.dfsGetComponents(u);
        }
        return this.components;
    }
    bfs(startVertex = 0) {
        let { adjacencyList } = this;
        let queue = [];
        let visited = new Array(this.n).fill(false);
        let visitedVertexOrder = [];
        visited[startVertex] = true;
        queue.push(startVertex);
        while (queue.length) {
            let u = queue.shift();
            visitedVertexOrder.push(u);
            for (let v of adjacencyList[u]) {
                if (!visited[v]) {
                    visited[v] = true;
                    queue.push(v);
                }
            }
        }
        return visitedVertexOrder;
    }
    shortestPath_bfs(source = 0, destination = n - 1) {
        let { adjacencyList } = this;
        if (source === destination) return [source];
        let queue = [];
        let visited = new Array(this.n).fill(false);
        let parentMap = new Map();
        visited[source] = true;
        queue.push(source);
        parentMap.set(source, null);
        let reachedDestination = false;
        while (queue.length) {
            let u = queue.shift();
            for (let v of adjacencyList[u]) {
                if (!visited[v]) {
                    visited[v] = true;
                    parentMap.set(v, u);
                    if (v === destination) {
                        reachedDestination = true;
                        break;
                    }
                    queue.push(v);
                }
            }
            if (reachedDestination === true) break;
        }
        if (!reachedDestination) return [];
        let shortestPathVertexOrder = [];
        let currentNode = destination;
        shortestPathVertexOrder.push(currentNode);
        while (currentNode !== source) {
            let parent = parentMap.get(currentNode);
            currentNode = parent;
            shortestPathVertexOrder.push(currentNode);
        }
        return shortestPathVertexOrder.reverse();
    }
}



give py and cpp
