import Quill from "quill";
import { useEffect, useRef, useState } from "react";
import { assets, blogCategories } from "../../assets/assets";

const AddBlog = () => {
  const quillRef = useRef(null);
  const editorRef = useRef(null);

  const [image, setImage] = useState(false);
  const [title, setTitle] = useState("");
  const [subTitle, setSubtitle] = useState("");
  const [category, setCategory] = useState("Startup");
  const [isPublished, setIsPublished] = useState(false);
  const [blogContent, setBlogContent] = useState("");
  const [showPreview, setShowPreview] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const content = quillRef.current?.root.innerHTML || "";
    console.log("Submitted:", { title, subTitle, content, image, category });
  };

  const generateContent = () => {
    // AI logic placeholder
  };

  const updateLiveContent = () => {
    if (quillRef.current) {
      setBlogContent(quillRef.current.root.innerHTML);
    }
  };

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
      });
      quillRef.current.on("text-change", updateLiveContent);
    }
  }, []);

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex-1 bg-blue-50/50 text-gray-600 py-6 px-4 sm:px-6 overflow-auto flex justify-center"
    >
      <main className="w-full max-w-4xl bg-white p-4 sm:p-8 shadow rounded">
        <label htmlFor="image" className="block mb-4">
          <p className="font-medium text-sm">Upload Thumbnail</p>
          <div className="mt-3">
            <img
              src={!image ? assets.upload_area : URL.createObjectURL(image)}
              alt="upload"
              className="h-20 rounded-md cursor-pointer object-contain border"
            />
            <input
              type="file"
              id="image"
              hidden
              required
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
        </label>

        <label className="block mt-4">
          <p className="font-medium text-sm">Blog Title</p>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 outline-none rounded"
            placeholder="Enter blog title"
          />
        </label>

        <label className="block mt-4">
          <p className="font-medium text-sm">Blog Subtitle</p>
          <input
            type="text"
            value={subTitle}
            onChange={(e) => setSubtitle(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 outline-none rounded"
            placeholder="Enter blog subtitle"
          />
        </label>

        <div className="mt-4">
          <p className="font-medium text-sm">Blog Description</p>
          <div className="relative mt-2 h-72 sm:h-80 border border-gray-300 rounded overflow-hidden">
            <div ref={editorRef} className="h-full px-3 py-2" />
            <button
              type="button"
              onClick={generateContent}
              className="absolute bottom-2 right-2 text-xs bg-black/70 text-white px-3 py-1 rounded hover:bg-black hover:scale-95 cursor-pointer z-10"
            >
              Generate using AI
            </button>
          </div>
        </div>

        <label className="block mt-10">
          <p className="font-medium text-sm">Blog Category</p>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-2 px-3 py-2 border border-gray-300 outline-none rounded text-sm text-gray-700"
          >
            <option value="">Select Category</option>
            {blogCategories.map((cat, i) => (
              <option key={i} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </label>

        <section className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6">
          <div className="flex items-center gap-3">
            <p className="text-sm">Publish Now</p>
            <input
              type="checkbox"
              checked={isPublished}
              onChange={(e) => setIsPublished(e.target.checked)}
              className="scale-125 cursor-pointer"
            />
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setShowPreview((prev) => !prev)}
              className="h-10 px-4 text-sm border border-primary text-primary rounded hover:bg-primary/20 transition hover:scale-95"
            >
              {showPreview ? "Hide Preview" : "Live Preview"}
            </button>
            <button
              type="submit"
              className="h-10 px-6 bg-primary text-white rounded text-sm hover:bg-primary/90 transition cursor-pointer hover:scale-95"
            >
              Add Blog
            </button>
          </div>
        </section>

        {showPreview && (
          <section className="mt-10">
            <h3 className="text-lg font-semibold mb-2">Live Preview</h3>
            <div className="p-4 border border-gray-200 rounded bg-gray-50 overflow-auto max-h-[400px] prose prose-sm sm:prose">
              <h1>{title}</h1>
              <h2 className="text-base text-gray-600">{subTitle}</h2>
              <div
                className="mt-4"
                dangerouslySetInnerHTML={{ __html: blogContent }}
              />
            </div>
          </section>
        )}
      </main>
    </form>
  );
};

export default AddBlog;
