#include <vector>
using namespace std;

class Graph {
public:
    int n;
    vector<vector<int>> adj;
    vector<int> ind;

    Graph(int n, const vector<vector<int>>& edges) : n(n), adj(n), ind(n, 0) {
        for (auto& edge : edges) {
            int u = edge, v = edge[1];
            adj[u].push_back(v);
            adj[v].push_back(u);
            ind[u]++;
            ind[v]++;
        }
    }
};

int findCenter(vector<vector<int>>& edges) {
    int n = edges.size() + 1;
    Graph g(n, edges);
    for (int u = 0; u < n; ++u) {
        if (g.ind[u] > 1) return u;
    }
    return -1;
}
