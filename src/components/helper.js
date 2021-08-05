export const calculate = (x) => {
  const value = parseInt(x);
  let a, b;
  if (value === 1) {
    a = 0;
    b = -1;
  } else if (value < 4 || value === 4) {
    a = 1;
    b = -1;
  } else {
    const maxRoot = Math.pow(x - 1, 1 / 2);
    const min = Math.floor(maxRoot) ** 2;

    let temp;
    for (let i = x - 1; i > min - 1; i--) {
      const num2 = numberRoot(i, 2);
      const num3 = numberRoot(i, 3);
      if (num2 === Math.floor(num2)) {
        temp = i;
        break;
      } else if (num3 === Math.floor(num3)) {
        temp = i;
        break;
      } else {
        temp = i;
      }
    }
    let y = 0;
    let result = recur(temp, y);
    a = temp;
    b = result;
  }
  return `(${a},${b})`;
};

export const recur = (x, y) => {
  const num2 = numberRoot(x, 2);
  const num3 = numberRoot(x, 3);

  if (num2 === Math.floor(num2)) {
    y++;
    if (num3 !== Math.floor(num3)) {
      return recur(num2, y);
    }
  }
  if (num3 === Math.floor(num3)) {
    y++;
    return recur(num3, y);
  } else {
    return y;
  }
};

export const numberRoot = (x, n) => {
  return (x > 1 || x < -1) && n === 0
    ? Infinity
    : (x > 0 || x < 0) && n === 0
    ? 1
    : x < 0 && n % 2 === 0
    ? `${(x < 0 ? -x : x) ** (1 / n)}${"i"}`
    : n === 3 && x < 0
    ? -Math.cbrt(-x)
    : x < 0
    ? -((x < 0 ? -x : x) ** (1 / n))
    : n === 3 && x > 0
    ? Math.cbrt(x)
    : (x < 0 ? -x : x) ** (1 / n);
};
