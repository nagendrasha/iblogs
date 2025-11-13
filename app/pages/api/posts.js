import { connectDB } from "@/app/lib/connectDB";
import { Post } from "@/app/lib/model/post";
import { NextResponse } from "next/server";

export async function DELETE(request) {
  try {
    // Connect to database
    await connectDB();
    // Parse the request body
    const body = await request.json();
    const { id } = body;
    // Validate ID
    if (!id) {
      return NextResponse.json(
        { message: "Post ID is required" },
        { status: 400 }
      );
    }
    // Delete post by ID
    const deletedPost = await Post.findByIdAndDelete(id);
    if (!deletedPost) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "Post deleted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting post:", error);
    return NextResponse.json(
      { message: "Error deleting post", error: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    // Connect to database
    await connectDB();
    // Parse the request body
    const body = await request.json();
    const { id, title, category, author, date, content } = body;
    // Validate ID
    if (!id) {
      return NextResponse.json(
        { message: "Post ID is required" },
        { status: 400 }
      );
    }
    // Find and update post by ID
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { title, category, author, date: new Date(date), content },
      { new: true }
    );
    if (!updatedPost) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }
    return NextResponse.json(
      {
        message: "Post updated successfully!",
        data: updatedPost,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating post:", error);
    return NextResponse.json(
      { message: "Error updating post", error: error.message },
      { status: 500 }
    );
  }
}
