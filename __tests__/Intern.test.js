const Intern = require('../lib/Intern');

test('creates a intern object', () => {
const intern = new Intern('Guillermo', 1, 'none@none.com', 'UCONN');

expect(intern.name).toBe('Guillermo');
expect(intern.id).toEqual(expect.any(Number));
expect(intern.email).toEqual(expect.stringContaining('@', '.'));
expect(intern.school).toEqual(expect.any(String));
});

test("checks if Intern's role, is Intern", () => {
  const intern = new Intern('Guillermo', 1, 'none@none.com', 'UCONN');

  expect(intern.getRole()).toBe('Intern');
});

test("gets intern's school", () => {
  const intern = new Intern('Guillermo', 1, 'none@none.com', 'UCONN');

  expect(intern.getSchool()).toBe('UCONN');
});
