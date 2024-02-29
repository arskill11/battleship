import AI from "../ai";

test('Creates correct array of available attacks', () => {
  const ai = AI();
  let cellsCount = 0;
  for (let row = 0; row < ai.availableAttacks.length; row++) {
    for (let col =  0; col < ai.availableAttacks[row].length; col++) {
      if (ai.availableAttacks[row][col] !== undefined) {
        cellsCount++;
      }
    }
  }
  expect(cellsCount).toBe(64);
  expect(JSON.stringify(ai.availableAttacks[0][0])).toBe(JSON.stringify([0, 0]));
  expect(JSON.stringify(ai.availableAttacks[5][6])).toBe(JSON.stringify([5, 6]));
})

test('When attacks, removes the cell from the array of available attacks', () => {
  const ai = AI();
  ai.attack();
  ai.attack();
  ai.attack();

  let cellsCount = 0;
  for (let row = 0; row < ai.availableAttacks.length; row++) {
    for (let col =  0; col < ai.availableAttacks[row].length; col++) {
      if (ai.availableAttacks[row][col] !== undefined) {
        cellsCount++;
      }
    }
  }
  expect(cellsCount).toBe(61);
})