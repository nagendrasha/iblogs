import { NextResponse } from "next/server";
import connectDB from "../lib/connectDB";

export async function GET(req){
    try {
        await connectDB();
        return NextResponse.json({"msg":"success"},{status:200})
        
    } catch (error) {
        return  NextResponse.json({"msg":"error"},{status:500})
    }
}