// TODO: write code here

// comment this to pass build
const unusedVariable = 'variable';

// for demonstration purpose only
export default function factorial(n) {
  const result = (n !== 1) ? n * factorial(n - 1) : 1;
  console.log(`Факториал 5 = ${result}`);
  return result;
}

