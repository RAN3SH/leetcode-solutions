def removeDuplicates(a):
    n = len(a)
    l = 0
    for r in range(n):
        if r == 0 or a[r - 1] != a[r]:
            a[l] = a[r]
            l += 1
    return l

def removeDuplicates22222222(a):
    s = set(a)
    i = 0
    for x in s:
        a[i] = x
        i += 1
    return i
