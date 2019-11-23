import java.util.*;

class Find {

  public static void main(String[] args) {
    Integer[] arr = { 1, 2, 4, 10, 20, 20, 2, 4 };
    find(arr);
  }

  public static void find(Integer[] arr) {
    // Validate
    if (arr.length < 2) {
      System.out.println("array is invalid");
    }

    // Unique & Sorted
    Set<Integer> unique = new TreeSet<>();
    Collections.addAll(unique, arr);
    System.out.println(unique);

    Integer[] sorted = {};
    sorted = unique.toArray(sorted);

    Integer secondSmallest = sorted[1];
    Integer secondLargest = sorted[sorted.length - 2];

    System.out.println("secondSmallest: " + secondSmallest + ", secondLargest:" + secondLargest);
  }
}