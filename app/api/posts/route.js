import { connectDB } from "@/app/lib/connectDB";
import { Post } from "@/app/lib/model/post";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Connect to database
    await connectDB();
    
    // Parse the request body
    const body = await request.json();
    const { title, category, author, date, content } = body;
    
    // Validate required fields
    if (!title || !category || !author || !date || !content) {
      return NextResponse.json(
        { message: "All fields are required" }, 
        { status: 400 }
      );
    }
    
    // Create new post
    const newPost = new Post({
      title,
      category,
      author,
      date: new Date(date),
      content,
      like: "0", // Default values
      comment: "0"
    });
    
    // Save to database
    const savedPost = await newPost.save();
    
    return NextResponse.json(
      { 
        message: "Post created successfully!", 
        post: savedPost 
      }, 
      { status: 201 }
    );
    
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { 
        message: "Error creating post", 
        error: error.message 
      }, 
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    // Connect to database
    await connectDB();
    
    // Fetch all posts
    const posts = await Post.find({});
    
    return NextResponse.json(posts, { status: 200,message: "Posts fetched successfully!" });
    
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { message: "Error fetching posts", error: error.message }, 
      { status: 500 }
    );
  }
}

  
