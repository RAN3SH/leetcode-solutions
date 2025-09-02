#include <vector>
#include <set>
using namespace std;

class Graph {
public:
    int n;
    vector<vector<int>> adj;
    vector<int> ind;

    Graph(int n, const vector<vector<int>>& edges) : n(n), adj(n), ind(n, 0) {
        for (const auto& e : edges) {
            int u = e, v = e[1];
            adj[u].push_back(v);
            adj[v].push_back(u);
            ind[u]++;
            ind[v]++;
        }
    }

    void dfs(int u, vector<bool>& vis, vector<int>& comp) {
        vis[u] = true;
        comp.push_back(u);
        for (int v : adj[u])
            if (!vis[v]) dfs(v, vis, comp);
    }

    vector<vector<int>> getConnectedComponents() {
        vector<vector<int>> components;
        vector<bool> vis(n, false);
        for (int u = 0; u < n; ++u) {
            if (!vis[u]) {
                vector<int> comp;
                dfs(u, vis, comp);
                components.push_back(comp);
            }
        }
        return components;
    }
};

int countCompleteComponents(int n, vector<vector<int>>& edges) {
    Graph g(n, edges);
    auto components = g.getConnectedComponents();
    int completeCompCount = 0;
    for (auto& comp : components) {
        int numOfVertices = comp.size();
        set<int> indVals;
        for (int x : comp) indVals.insert(g.ind[x]);
        if (indVals.size() == 1 && *indVals.begin() == numOfVertices - 1) {
            completeCompCount++;
        }
    }
    return completeCompCount;
}
