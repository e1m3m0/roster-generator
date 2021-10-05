const Engineer = require('../lib/Engineer');

test('creates a engineer object', () => {
const engineer = new Engineer('Guillermo', 1, 'none@none.com');

expect(engineer.name).toBe('Guillermo');
expect(engineer.id).toEqual(expect.any(Number));
expect(engineer.email).toEqual(expect.stringContaining('@', "."));
});