class Employee {
  constructor(name, id, email){
    this.name = name;
    this.id = id;
    this.email = email
  }
  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole(role) {
    this.role = '';
    return this.role = role;
}
}

module.exports = Employee