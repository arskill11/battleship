import Player from "../player";

let player, bot;
beforeEach(() => {
  player = Player('Ars');
  bot = Player(false);
  player.gameboard.placeShip('submarine', [0, 0], 'horizontal');
  bot.gameboard.placeShip('submarine', [3, 3], 'vertical');
})

test('PLayer has their board', () => {
  expect(Array.isArray(player.gameboard.board)).toBeTruthy();
})

test('Player attacks and misses', () => {
  expect(bot.gameboard.checkSquare(7,7)).toBe(null);
  const attackedSquare = player.attack(bot, 7, 7);
  expect(attackedSquare[0]).toBe('missed');
})

test('PLayer attacks and hits', () => {
  expect(bot.gameboard.checkSquare(3,3)).not.toBe(null);
  const attackedSquare = player.attack(bot, 3, 3);
  expect(attackedSquare[0]).toBe('hit');
})

test('Bot attacks', () => {
  const attackedSquare = bot.attack(player);
  expect(typeof attackedSquare[0]).toBe('string');
})

test('Bot attacks 64 times so all the cells are considered', () => {
  for (let i = 0; i < 64; i++) {
    bot.attack(player);
  }
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      expect(typeof player.gameboard.checkSquare(row, col)).toBe('string');
    }
  }
})

test('Bot cannot attack more than 64 times', () => {
  for (let i = 0; i < 64; i++) {
    bot.attack(player);
  }
  expect(bot.attack(player)).toBe('No squares to attack');
})