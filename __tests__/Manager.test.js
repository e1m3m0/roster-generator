const { expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('creates a manager object', () => {
const manager = new Manager('Guillermo', 1, 'none@none.com', 220);

expect(manager.name).toBe('Guillermo');
expect(manager.id).toEqual(expect.any(Number));
expect(manager.email).toEqual(expect.stringContaining('@', "."));
expect(manager.office).toEqual(expect.any(Number));
});

test("checks if Manager's role, is manager", () => {
  const manager = new Manager('Guillermo', 1, 'none@none.com');

  expect(manager.getRole()).toBe('Manager');
});

test("gets the manager's office number", () => {
  const manager = new Manager('Guillermo', 1, 'none@none.com', 220);

  expect(manager.officeNumber()).toBe(220);
});
