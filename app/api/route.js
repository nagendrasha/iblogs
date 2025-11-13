import { NextResponse } from "next/server";
import { connectDB } from "../lib/connectDB"; 
import { Post } from "../lib/model/post"; 
import mongoose from 'mongoose';  

export async function GET(req) {
  try {
    await connectDB(); // Attempt to connect to the database

    const posts = await Post.find({});

    return NextResponse.json(posts, { msg: "success" }, { status: 200 });
  } catch (error) {
    console.error("Error during GET request:", error.message); // Log the error for debugging
    return NextResponse.json({ msg: "error occurred", error: error.message }, { status: 500 });
  }
}