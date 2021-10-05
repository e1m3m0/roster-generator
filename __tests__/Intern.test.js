const Intern = require('../lib/Intern');

test('creates a intern object', () => {
const intern = new Intern('Guillermo', 1, 'none@none.com');

expect(intern.name).toBe('Guillermo');
expect(intern.id).toEqual(expect.any(Number));
expect(intern.email).toEqual(expect.stringContaining('@', "."));
});
