function sortBy2Criteria(input) {
  input.sort(twoCriteriaSort);
  input.forEach((el) => console.log(el));

  function twoCriteriaSort(cur, next) {
    if (cur.length === next.length) {
      return cur.localeCompare(next);
    }
    return cur.length - next.length;
  }
}
sortBy2Criteria(["alpha", "beta", "gamma"]);
sortBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
