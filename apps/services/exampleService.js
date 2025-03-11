const { ObjectId } = require("mongodb");
var config = require("./../../config/setting.json");
class ExampleService {
  databaseConnection = require("./../database/database");
  product = require("../entity/example");
  client;
  productDatabase;
  productCollection;
  constructor() {
    this.client = this.databaseConnection.getMongoClient();
    this.productDatabase = this.client.db(config.mongodb.database);
    this.productCollection = this.productDatabase.collection("Example");
  }
  async deleteProduct(id) {
    return await this.productCollection.deleteOne({ _id: new ObjectId(id) });
  }
  async updateProduct(product) {
    return await this.productCollection.updateOne(
      { _id: new ObjectId(product._id) },
      {
        $set: product,
      }
    );
  }
  async insertProduct(product) {
    return await this.productCollection.insertOne(product);
  }
  async getProduct(id) {
    var result = await this.productCollection.findOne(
      {
        _id: new ObjectId(id),
      },
      {}
    );
    // console.log(new ObjectId(product._id) + " - " + result);
    return result;
  }
  async getProductList() {
    // var state = await this.productDatabase.stats();
    // console.log(state);
    const cursor = await this.productCollection.find().skip(0).limit(100);
    return await cursor.toArray();
  }
}
module.exports = ExampleService;
