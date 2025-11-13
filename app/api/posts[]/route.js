import { connectDB } from "@/app/lib/connectDB";
import { Post } from "@/app/lib/model/post";
import { NextResponse } from "next/server";
import mongoose from "mongoose";


export async function GET(request, { params }) {
  await connectDB();
  const { id } = params;

  try {
    const post = await Post.findById(id);
    if (!post) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }
    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error fetching post", error }, { status: 500 });
  }
}
