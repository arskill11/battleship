import Game from "../game";

let game,
    player,
    bot;
beforeEach(() => {
  game = Game();
  player = game.createPlayer('Ars', 1);
  bot = game.createPlayer(false, 2);
  game.createNewGame(player, bot);
})

test('Create a new game' , () => {
  expect(game.playerOne.isAI).toBeFalsy();
  expect(game.playerTwo.isAI).toBeTruthy();
})

test('Everyone can attack', () => {
  expect(typeof player.attack(bot, 0, 0)[0]).toBe('string');
  expect(typeof bot.attack(player)[0]).toBe('string');
})