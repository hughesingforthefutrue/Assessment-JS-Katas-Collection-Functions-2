// ADDING
function add(a, b) {
  return a + b;
}

console.log(add(6, 4));

// Multiplying
function multiply(a, b) {
  let count = 0;
  total = 0;
  while (count < b) {
    total += a;
    count++;
  }
  return total;
}

console.log(multiply(6, 4));

// Power
function powerof(x, n) {
  let count = 1;
  let total = 0;
  let result = 0;

  while (count <= n) {
    total = multiply(x, x);
    result = multiply(total, x);

    count++;
  }
  return result;
}

console.log(powerof(5, 3));

// Factorial
function factorial(a) {
  let count = 1;
  let total = 0;
  let result = 1;

  while (count < a) {
    result = multiply(result, a);
    a--;
    // console.log(total);
    // result = multiply(total, a);
  }
  return result;
}
console.log(factorial(5));

// Fibonacci
function fibonacci(n) {
  if (n == 1) {
    return 0;
  }
  if (n == 2) {
    return 1;
  }
  let count = 2;
  let total;
  let y = 0;
  x = 1;

  while (count <= n) {
    total = add(x, y);
    console.log(total);
    x = y;
    y = total;

    count++;
  }
  return y;
}

console.log(fibonacci(8));
