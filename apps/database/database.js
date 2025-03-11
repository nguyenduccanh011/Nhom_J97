// const { use } = require("../controllers");
var config = require("./../../config/setting.json");
var dataConfig;
const IS_LOCAL = config.isUsingLocalMongodb;
var url = config.url;
function getConfig(isLocal) {
  if (isLocal) {
    return config.localMongodb;
  } else {
    return config.mongodb;
  }
}
function getUrl(isLocal, username, password) {
  var str = "";
  if (isLocal) {
    str = url.localMongodb;
  } else {
    str = url.mongodb;
  }
  str = str.replace("[user]", username);
  str = str.replace("[pass]", password);
  return str;
}
dataConfig = getConfig(IS_LOCAL);
class DatabaseConnection {
  url;
  user;
  pass;
  constructor() {}
  static getMongoClient() {
    this.user = dataConfig.username;
    this.pass = dataConfig.password;
    this.url = getUrl(IS_LOCAL, this.user, this.pass);
    const { MongoClient } = require("mongodb");
    const client = new MongoClient(this.url);
    return client;
  }
}
module.exports = DatabaseConnection;
