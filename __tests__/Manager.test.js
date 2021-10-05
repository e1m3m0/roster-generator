const Manager = require('../lib/Manager');

test('creates a manager object', () => {
const manager = new Manager('Guillermo', 1, 'none@none.com');

expect(manager.name).toBe('Guillermo');
expect(manager.id).toEqual(expect.any(Number));
expect(manager.email).toEqual(expect.stringContaining('@', "."));
});

test("checks if Manager's role, is manager", () => {
  const manager = new Manager('Guillermo', 1, 'none@none.com');

  expect(manager.getRole()).toBe('Manager');
});

test('creates a officeNumber prototype', () => {
  const manager = new Manager('Guillermo', 1, 'none@none.com');

  manager.officeNumber(220);

  expect(manager.office).toEqual(expect.any(Number));
});