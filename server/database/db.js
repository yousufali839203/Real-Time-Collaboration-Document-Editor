import mongoose from "mongoose";

const Connection = async (
  username = "yousufali06296",
  password = "uYbbeOeFWELrZP8q"
) => {
  const URL = `mongodb://${username}:${password}@ac-ucgtvu9-shard-00-00.c2t2gwh.mongodb.net:27017,ac-ucgtvu9-shard-00-01.c2t2gwh.mongodb.net:27017,ac-ucgtvu9-shard-00-02.c2t2gwh.mongodb.net:27017/?ssl=true&replicaSet=atlas-lp8o4d-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Google-docs-clone`;

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database ", error);
  }
};

export default Connection;
