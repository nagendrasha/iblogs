import { connctionStr } from "@/app/lib/connectDB";
import { Post } from "@/app/lib/model/post";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await mongoose.connect(connctionStr);
    const data = await Post.find();
    return NextResponse.json({result:data,success:true});
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error" });
  }
}
