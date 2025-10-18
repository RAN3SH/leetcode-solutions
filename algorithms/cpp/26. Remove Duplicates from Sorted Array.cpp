#include <vector>
#include <set>
using namespace std;

int removeDuplicates(vector<int>& a) {
    int n = a.size();
    int l = 0;
    for (int r = 0; r < n; r++) {
        if (r == 0 || a[r - 1] != a[r]) {
            a[l] = a[r];
            l++;
        }
    }
    return l;
}

int removeDuplicates22222222(vector<int>& a) {
    set<int> s(a.begin(), a.end());
    int i = 0;
    for (int x : s) {
        a[i] = x;
        i++;
    }
    return i;
}
