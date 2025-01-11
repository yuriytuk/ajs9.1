import Daemon from '../Daemon';
import Magician from '../Magician';
import Math from '../Math';

test('новый игрок Math', () => {
  const Math1 = new Math('diablo');
  const result = {
    name: 'diablo', health: 100, level: 1, _stoned: false,
  };
  expect(Math1).toEqual(result);
});

test('Magician - 2 клетка', () => {
  const magician = new Magician('diablo');
  magician.stoned = false;
  magician.x = 2;
  const result = magician.attack;
  expect(result).toBe(8);
});
test('Magician 2 клетка - дурман', () => {
  const magician = new Magician('diablo');
  magician.stoned = true;
  magician.x = 2;
  const result = magician.attack;
  expect(result).toBeCloseTo(5.6);
});

test('Daemon - 2 клетка', () => {
  const daemon = new Daemon('diablo');
  daemon.stoned = false;
  daemon.x = 2;
  const result = daemon.attack;
  expect(result).toBeCloseTo(8);
});
test('Daemon - 6 клетка', () => {
  const daemon = new Daemon('diablo');
  daemon.stoned = false;
  daemon.x = 6;
  const result = daemon.attack;
  expect(result).toBe("Вы слишком далеко!");
});