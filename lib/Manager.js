const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email, office);
    
  
   }
  
  getRole() {
    this.role = 'Manager';
    return this.role;
  }
  
  officeNumber(office) {
    return this.office = office
  }

  
}

module.exports = Manager