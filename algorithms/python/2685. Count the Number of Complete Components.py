class Graph:
    def __init__(self, n: int, edges: List[List[int]]):
        self.n = n
        self.adj = [[] for _ in range(n)]
        self.ind = [0] * n
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


def countCompleteComponents(n: int, edges: List[List[int]]) -> int:
    g = Graph(n, edges)
    components = g.getConnectedComponents()
    completeCompCount = 0
    for comp in components:
        numOfVertices = len(comp)
        if all(g.ind[x] == numOfVertices - 1 for x in comp):
            completeCompCount += 1
    return completeCompCount
