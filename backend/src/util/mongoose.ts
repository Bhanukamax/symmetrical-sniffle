import * as mongoose from "mongoose";

export async function initDb() {
  await mongoose.connect("mongodb://database/test");
}
