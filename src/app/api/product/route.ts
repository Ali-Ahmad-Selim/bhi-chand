import { NextResponse } from "next/server";
import { Connect } from "../../../mongodb/connection";
import Posting from "@/model/post";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export const runtime = "nodejs"; // server-side
export const dynamic = "force-dynamic";

/**
 * GET /api/postings
 * Returns all postings, optionally filtered by ?option=Home
 */
export async function GET(req: Request) {
  try {
    await Connect();

    const { searchParams } = new URL(req.url);
    const option = searchParams.get("option");

    const filter = option ? { option } : {};
    const items = await Posting.find(filter).sort({ createdAt: -1 });

    return NextResponse.json({ ok: true, items });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}

/**
 * POST /api/postings
 * Creates a new posting (with image uploaded to Cloudinary)
 */
export async function POST(req: Request) {
  try {
    await Connect();
    const formData = await req.formData();

    const file = formData.get("file") as File;
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const alt = formData.get("alt") as string;
    const option = formData.get("option") as string;

    if (!file || !title || !option)
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });

    // Upload to Cloudinary
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const result = await new Promise<any>((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder: "postings" }, (err, res) => {
          if (err) reject(err);
          else resolve(res);
        })
        .end(buffer);
    });

    // Save in MongoDB
    const posting = await Posting.create({
      url: result.secure_url,
      publicId: result.public_id,
      title,
      description,
      alt,
      option,
    });

    return NextResponse.json({ ok: true, posting });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}

/**
 * DELETE /api/postings?id=<postingId>
 * Deletes a posting and its image from Cloudinary
 */
export async function DELETE(req: Request) {
  try {
    await Connect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) return NextResponse.json({ ok: false, error: "Missing ID" }, { status: 400 });

    const posting = await Posting.findById(id);
    if (!posting) return NextResponse.json({ ok: false, error: "Not found" }, { status: 404 });

    // Delete from Cloudinary
    await cloudinary.uploader.destroy(posting.publicId);

    // Delete from MongoDB
    await Posting.findByIdAndDelete(id);

    return NextResponse.json({ ok: true, message: "Deleted successfully" });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
