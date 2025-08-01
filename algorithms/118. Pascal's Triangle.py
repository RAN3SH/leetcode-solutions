class Solution:
    def generate(self, num_rows: int) -> List[List[int]]:
        if num_rows == 0:
            return []

        result = [[1]]
        for i in range(1, num_rows):
            prev_row = result[i - 1]
            current_row = [1]
            for j in range(1, i):
                current_row.append(prev_row[j - 1] + prev_row[j])
            current_row.append(1)
            result.append(current_row)
        return result
