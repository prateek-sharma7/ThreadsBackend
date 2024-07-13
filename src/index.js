import express from "express";
import { connect } from "./config/database.js";
import Tweet from "./models/tweet.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", router);

app.listen(3000, async () => {
  console.log("Server started");

  connect();

  console.log("Database connected.");

  Tweet.create({
    content: "This is my first tweet",
    likes: 25,
    noOfRetweets: 5,
    comment: "My comment",
  });
});
