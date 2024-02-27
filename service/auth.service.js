class Auth {
  tokenMap = new Map();

  static setUser(id, user) {
    this.tokenMap.set(id, user);
  }
  static getUser(id) {
    return this.tokenMap.get(id);
  }
}

module.exports = Auth;
