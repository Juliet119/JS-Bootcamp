function birthday(s, d, m) {
  let count = 0;

  for (let i = 0; i <= s.length - m; i++) {
    const subArray = s.slice(i, i + m);
    const sum = subArray.reduce((acc, curr) => acc + curr, 0);

    if (sum === d) {
      count++;
    }
  }

  return count;
}
console.log(birthday([1, 2, 1, 3, 2], 3, 2)); 