function factorial(n) {
  const one = typeof n === "bigint" ? 1n : 1;

  let value = one;

  while (n > 0) {
    value *= n;
    n--;
  }

  return value;
}
