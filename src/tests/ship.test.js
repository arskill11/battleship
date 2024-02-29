import Ship from "../ship";

test('Create a ship of the length of 3', () => {
  const submarine = Ship('submarine');
  expect(submarine.length).toBe(3);
})

test('Register hits', () => {
  const submarine = Ship('submarine');

  expect(submarine.hitCount).toBe(0);
  submarine.hit();
  expect(submarine.hitCount).toBe(1);
})

test('Make a ship sunk', () => {
  const carrier = Ship('carrier');
  expect(carrier.sunkStatus).toBeFalsy();
  carrier.hit();
  carrier.hit();
  carrier.hit();
  carrier.hit();
  expect(carrier.sunkStatus).toBeFalsy();
  carrier.hit();
  expect(carrier.sunkStatus).toBeTruthy();
})