
# This function finds the second smallest & second largest numbers
# from an array, and return the results in an array.


def find(list):

    print('inputs', list)

    if len(list) < 2:
        return "Invalid array"

    unique_sorted = []
    # remove dupliates
    for i in list:
        if i not in unique_sorted:
            unique_sorted.append(i)
    # sort it
    unique_sorted.sort()
    print('unique & sorted', unique_sorted)

    second_largest = unique_sorted[len(unique_sorted) - 2]
    second_smallest = unique_sorted[1]

    return [second_smallest, second_largest]


arr = [2, 24, 4, 10, 20, 5, 2, 20, 4]
print(find(arr))
arr = [100]
print(find(arr))
arr = []
print(find(arr))
arr = [2, 4]
print(find(arr))
