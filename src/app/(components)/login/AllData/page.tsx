"use client";

import { useRef, useState, useEffect } from "react";

const options = ["Home", "Undergarments", "Night Suit"] as const;

export default function NewPostPage() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMsg(null);

    try {
      const form = e.currentTarget as HTMLFormElement;
      const formData = new FormData(form);

      // Your API expects `file`
      const file = formData.get("file") as File | null;
      if (!file || file.size === 0) {
        throw new Error("Please select an image file.");
      }

      const response = await fetch("/api/product", {
        method: "POST",
        body: formData,
      });

      // Safe parse
      let data: any = null;
      const ct = response.headers.get("content-type") || "";
      if (ct.includes("application/json")) {
        data = await response.json();
      } else {
        const text = await response.text();
        data = { message: text };
      }

      if (!response.ok) {
        throw new Error(data?.message || "Error creating post");
      }

      setMsg("✅ Post created successfully!");
      form.reset();
      // reset file input + preview
      if (fileRef.current) fileRef.current.value = "";
      setPreview(null);
    } catch (error: any) {
      setMsg(`❌ ${error?.message || "Something went wrong"}`);
    } finally {
      setLoading(false);
    }
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) {
      if (preview) URL.revokeObjectURL(preview);
      setPreview(null);
      return;
    }
    const url = URL.createObjectURL(f);
    if (preview) URL.revokeObjectURL(preview);
    setPreview(url);
  }

  // Clean up preview URL on unmount
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#101828]">
      <div className="w-full max-w-md bg-[#1d2839] rounded-2xl shadow-lg p-6 mx-4">
        <h1 className="text-2xl font-bold mb-6 text-center text-white">New Post</h1>

        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="space-y-4"
        >
          <label className="block">
            <span className="text-sm text-gray-300">Title</span>
            <input
              name="title"
              placeholder="Title"
              required
              className="mt-1 w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#2d3a4f] bg-[#1d2839] text-white placeholder-gray-400"
            />
          </label>

          <label className="block">
            <span className="text-sm text-gray-300">Description (optional)</span>
            <textarea
              name="description"
              placeholder="Description (optional)"
              className="mt-1 w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#2d3a4f] bg-[#1d2839] text-white placeholder-gray-400 min-h-[100px]"
            />
          </label>

          <label className="block">
            <span className="text-sm text-gray-300">Alt Text (optional)</span>
            <input
              name="alt"
              placeholder="Alt Text (optional)"
              className="mt-1 w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#2d3a4f] bg-[#1d2839] text-white placeholder-gray-400"
            />
          </label>

          <label className="block">
            <span className="text-sm text-gray-300">Category</span>
            <select
              name="option"
              required
              defaultValue=""
              className="mt-1 w-full border p-2 rounded bg-[#1d2839] text-white focus:outline-none focus:ring-2 focus:ring-[#2d3a4f]"
            >
              <option value="" disabled className="bg-[#1d2839] text-white">
                Select Option
              </option>
              {options.map((opt) => (
                <option key={opt} value={opt} className="bg-[#1d2839] text-white">
                  {opt}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-sm text-gray-300">Image</span>
            <input
              ref={fileRef}
              name="file"
              type="file"
              accept="image/*"
              required
              onChange={handleFileChange}
              className="mt-1 w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#2d3a4f] bg-[#1d2839] text-white file:bg-[#2d3a4f] file:text-white file:border-0 file:rounded file:px-4 file:py-2 file:mr-4 file:hover:bg-[#3d4a5f] cursor-pointer"
            />
          </label>

          {preview && (
            <div className="rounded-lg overflow-hidden border border-[#2d3a4f]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={preview} alt="Preview" className="w-full h-48 object-cover" />
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#2d3a4f] hover:bg-[#3d4a5f] text-white py-2 rounded-lg shadow-md transition disabled:opacity-50"
          >
            {loading ? "Creating Post..." : "Create Post"}
          </button>
        </form>

        {msg && (
          <p
            className={`mt-4 text-center font-medium ${
              msg.startsWith("✅") ? "text-green-400" : "text-red-400"
            }`}
          >
            {msg}
          </p>
        )}
      </div>
    </div>
  );
}
