const fillArrByIdx = (idx, n) =>
  [...Array(n)]
    .map((_, i) => (i === idx || i === n - idx - 1 ? 2 : 0))
    .map((el, i, a) =>
      el === 2 ? 2 : i > a.indexOf(2) && i < a.lastIndexOf(2) ? 1 : 0
    );

const makeArr = (n) =>
  console.log(
    Array(n)
      .fill([])
      .map((_, idx) => fillArrByIdx(idx, n))
  );
