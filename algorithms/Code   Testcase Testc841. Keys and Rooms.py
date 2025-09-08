# 4
# Ranesh Chandra

from collections import deque

class Graph:
    def __init__(self, n=0, isDirected=True, from_edges=None, to_edges=None,
                 edges=None, oneIndexedVertices=False, adjacencyList=None):
        self.n = n
        self.isDirected = isDirected
        self.oneIndexedVertices = oneIndexedVertices
        self.from_edges = from_edges or []
        self.to_edges = to_edges or []
        self.edges = edges or []
        self.adjacencyList = [[] for _ in range(self.n)]
        self.inDegree = [0] * self.n
        self.outDegree = [0] * self.n
        self.visitedAllComponents = [False] * self.n
        self.components = []

        if adjacencyList:
            self.adjacencyList = adjacencyList
            for u in range(self.n):
                for v in self.adjacencyList[u]:
                    self.outDegree[u] += 1
                    self.inDegree[v] += 1
                    if not self.isDirected:
                        self.outDegree[v] += 1
                        self.inDegree[u] += 1
        elif self.from_edges:
            self.edges = []
            for u, v in zip(self.from_edges, self.to_edges):
                if self.oneIndexedVertices:
                    u -= 1
                    v -= 1
                self.edges.append([u, v])
                self.addEdge(u, v)
        elif self.edges:
            new_edges = []
            for u, v in self.edges:
                if self.oneIndexedVertices:
                    u -= 1
                    v -= 1
                new_edges.append([u, v])
                self.addEdge(u, v)
            self.edges = new_edges

    def addEdge(self, u, v):
        self.outDegree[u] += 1
        self.inDegree[v] += 1
        self.adjacencyList[u].append(v)
        if not self.isDirected:
            self.outDegree[v] += 1
            self.inDegree[u] += 1
            self.adjacencyList[v].append(u)

    def bfs(self, startVertex=0):
        visited = [False] * self.n
        visitedVertexOrder = []
        queue = deque([startVertex])
        visited[startVertex] = True

        while queue:
            u = queue.popleft()
            visitedVertexOrder.append(u)
            for v in self.adjacencyList[u]:
                if not visited[v]:
                    visited[v] = True
                    queue.append(v)
        return visitedVertexOrder


def canVisitAllRooms(adjacencyList):
    n = len(adjacencyList)
    g = Graph(n=n, isDirected=True, oneIndexedVertices=False, adjacencyList=adjacencyList)
    visitedVertexOrder = g.bfs(0)
    return len(visitedVertexOrder) == n
