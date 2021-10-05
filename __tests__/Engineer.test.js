const Engineer = require("../lib/Engineer");

test("creates a engineer object", () => {
  const engineer = new Engineer("Guillermo", 1, "none@none.com", "github");

  expect(engineer.name).toBe("Guillermo");
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.stringContaining("@", "."));
  expect(engineer.github).toEqual(expect.any(String));
});

test("checks if Engineer's role, is Engineer", () => {
  const engineer = new Engineer("Guillermo", 1, "none@none.com", "github");

  expect(engineer.getRole()).toBe("Engineer");
});

test("gets engineer's github", () => {
  const engineer = new Engineer("Guillermo", 1, "none@none.com", "github");

  expect(engineer.getGitHub()).toBe("github");
});
