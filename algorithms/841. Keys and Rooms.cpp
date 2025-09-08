#include <bits/stdc++.h>
using namespace std;

class Graph {
public:
    int n;
    bool isDirected;
    bool oneIndexedVertices;
    vector<vector<int>> adjacencyList;
    vector<int> inDegree, outDegree;
    vector<bool> visitedAllComponents;
    vector<vector<int>> components;

    Graph(int n_=0, bool isDirected_=true,
          vector<int> from={}, vector<int> to={},
          vector<pair<int,int>> edges={},
          bool oneIndexedVertices_=false,
          vector<vector<int>> adjacencyList_={}) 
    {
        n = n_;
        isDirected = isDirected_;
        oneIndexedVertices = oneIndexedVertices_;
        adjacencyList.assign(n, {});
        inDegree.assign(n, 0);
        outDegree.assign(n, 0);
        visitedAllComponents.assign(n, false);

        if (!adjacencyList_.empty()) {
            adjacencyList = adjacencyList_;
            for (int u = 0; u < n; u++) {
                for (int v : adjacencyList[u]) {
                    outDegree[u]++;
                    inDegree[v]++;
                    if (!isDirected) {
                        outDegree[v]++;
                        inDegree[u]++;
                    }
                }
            }
        } else if (!from.empty()) {
            for (int i = 0; i < (int)from.size(); i++) {
                int u = from[i], v = to[i];
                if (oneIndexedVertices) { u--; v--; }
                addEdge(u, v);
            }
        } else if (!edges.empty()) {
            for (auto [u,v] : edges) {
                if (oneIndexedVertices) { u--; v--; }
                addEdge(u, v);
            }
        }
    }

    void addEdge(int u, int v) {
        outDegree[u]++;
        inDegree[v]++;
        adjacencyList[u].push_back(v);
        if (!isDirected) {
            outDegree[v]++;
            inDegree[u]++;
            adjacencyList[v].push_back(u);
        }
    }

    vector<int> bfs(int startVertex=0) {
        vector<bool> visited(n, false);
        vector<int> visitedVertexOrder;
        queue<int> q;
        visited[startVertex] = true;
        q.push(startVertex);

        while (!q.empty()) {
            int u = q.front(); q.pop();
            visitedVertexOrder.push_back(u);
            for (int v : adjacencyList[u]) {
                if (!visited[v]) {
                    visited[v] = true;
                    q.push(v);
                }
            }
        }
        return visitedVertexOrder;
    }
};

bool canVisitAllRooms(vector<vector<int>>& adjacencyList) {
    int n = adjacencyList.size();
    Graph g(n, true, {}, {}, {}, false, adjacencyList);
    vector<int> visitedVertexOrder = g.bfs(0);
    return (int)visitedVertexOrder.size() == n;
}
