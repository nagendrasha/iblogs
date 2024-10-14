import mongoose from "mongoose";

const postModel = new mongoose.Schema({
    title: String,
    content: String,
    category:String,
    image:String,
    author: String,
    like:String,
    comment:String,
    date: Date,
})

export const Post = mongoose.models.posts || mongoose.model("posts", postModel); 