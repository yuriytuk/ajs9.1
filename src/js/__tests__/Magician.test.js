import Magician from '../Magician';
test('Получим объект Magician', () => {
  const description = new Magician('magician');
  const result = {
    name: 'magician', type: 'Magician', health: 100, level: 1, _attack: 10, defence: 40, _stoned: true,
  };
  expect(description).toEqual(result);
});