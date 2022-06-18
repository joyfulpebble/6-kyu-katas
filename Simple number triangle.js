function solve(n) {
  let next, curr = [ 1n ];

  for (let i = 0; i < n; i++) {
    next = [ 1n ];

    for (let j = 1; j < curr.length; j++)
    next.push(next[j - 1] + curr[j]);

    curr = next.concat(next.slice(-1));
  }
  return curr[curr.length - 1];
}

solve(5)