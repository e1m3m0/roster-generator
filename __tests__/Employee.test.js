const Employee =  require('../lib/Employee');

test('creates a employee object', () => {
const employee = new Employee('Guillermo', 1, 'none@none.com');

expect(employee.name).toBe('Guillermo');
expect(employee.id).toEqual(expect.any(Number));
expect(employee.email).toEqual(expect.stringContaining('@', "."));
});

test("gets employee's name", () => {
  const employee = new Employee('Guillermo', 1, 'none@none.com');

  expect(employee.getName()).toBe('Guillermo');
});

test("gets employee's id", () => {
  const employee = new Employee('Guillermo', 1, 'none@none.com');

  expect(employee.getId()).toBe(1);
});

test("gets employee's email", () => {
  const employee = new Employee('Guillermo', 1, 'none@none.com');

  expect(employee.getEmail()).toBe('none@none.com');
});

test('checks if role prototype was created', () => {
  const employee = new Employee('Guillermo', 1, 'none@none.com');

  expect(employee.getRole('Employee')).toBe('Employee');
});
