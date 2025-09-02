class Graph:
    def __init__(self, n, edges):
        self.n = n
        self.adj = [[] for _ in range(n)]
        self.ind =  * n
        for u, v in edges:
            self.adj[u].append(v)
            self.adj[v].append(u)
            self.ind[u] += 1
            self.ind[v] += 1

    def dfs(self, u, vis, comp):
        vis[u] = True
        comp.append(u)
        for v in self.adj[u]:
            if not vis[v]:
                self.dfs(v, vis, comp)

    def getConnectedComponents(self):
        components = []
        vis = [False] * self.n
        for u in range(self.n):
            if not vis[u]:
                comp = []
                self.dfs(u, vis, comp)
                components.append(comp)
        return components

def countCompleteComponents(n, edges):
    g = Graph(n, edges)
    components = g.getConnectedComponents()
    completeCompCount = 0
    for comp in components:
        numOfVertices = len(comp)
        ind = [g.ind[x] for x in comp]
        if len(set(ind)) == 1 and ind == numOfVertices - 1:
            completeCompCount += 1
    return completeCompCount
