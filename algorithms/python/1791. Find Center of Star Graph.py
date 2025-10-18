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

def findCenter(edges):
    n = len(edges) + 1
    g = Graph(n, edges)
    for u in range(n):
        if g.ind[u] > 1:
            return u
    return -1
