import factorial from '../app';

test('factorial 5', () => {
  expect(factorial(5)).toBe(120);
});
