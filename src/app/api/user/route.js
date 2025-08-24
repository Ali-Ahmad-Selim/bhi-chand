import { NextResponse } from "next/server";
import connectToDatabase from "../../../Database/connection";
import User from "../../../Model/Schema";

// POST -> create a new user
export async function POST(req) {
  try {
    await connectToDatabase();
    const { email, password } = await req.json();

    const user = await User.create({ email, password });

    return NextResponse.json(
      { message: "User created", user },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "Error creating user", error: err.message },
      { status: 500 }
    );
  }
}

// GET -> get all users
export async function GET() {
  try {
    await connectToDatabase(); // fixed typo
    const users = await User.find().select("-password"); // hide password
    return NextResponse.json(users, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "Error fetching users", error: err.message },
      { status: 500 }
    );
  }
}

// PATCH -> login user
export async function PATCH(req) {
  try {
    await connectToDatabase();
    const { email, password } = await req.json();

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    // simple plain password check (⚠️ Not secure, use bcrypt in production)
    if (user.password !== password) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { message: "Login successful", user: { email: user.email, id: user._id } },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "Error logging in", error: err.message },
      { status: 500 }
    );
  }
}
