class User {
    constructor(id, name, email, role) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.role = role || "user"; // Mặc định là "user"
    }
  }
  
  module.exports = User;
  