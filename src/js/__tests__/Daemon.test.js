import Daemon from '../Daemon';
test('Получим объект Daemon', () => {
  const description = new Daemon('daemon');
  const result = {
    name: 'daemon', type: 'Daemon', health: 100, level: 1, _attack: 10, defence: 40, _stoned: false,
  };
  expect(description).toEqual(result);
});