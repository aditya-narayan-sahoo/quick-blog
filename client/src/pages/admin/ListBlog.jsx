import { useEffect, useState } from "react";
import { Inbox, Search } from "lucide-react";
import { blog_data } from "../../assets/assets";
import BlogTableItem from "../../components/admin/BlogTableItem";

const ListBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [query, setQuery] = useState("");

  const fetchBlogs = async () => setBlogs(blog_data);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="flex-1 pt-5 px-4 sm:pt-12 sm:px-10 bg-blue-50/50">
      <header className="mb-6 max-w-5xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-700 mb-4">All Blogs</h1>
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search blogs by title..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full sm:w-80 pl-10 pr-4 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
        </div>
      </header>

      <main className="relative w-full max-w-5xl mx-auto overflow-x-auto shadow rounded-lg bg-white">
        <table className="w-full text-sm text-gray-600">
          <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-2 py-4 xl:px-6 text-left">#</th>
              <th className="px-2 py-4 text-left">Blog Title</th>
              <th className="px-2 py-4 text-left max-sm:hidden">Date</th>
              <th className="px-2 py-4 text-left max-sm:hidden">Status</th>
              <th className="px-2 py-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog, index) => (
                <BlogTableItem
                  key={blog._id}
                  blog={blog}
                  fetchBlogs={fetchBlogs}
                  index={index + 1}
                />
              ))
            ) : (
              <tr>
                <td colSpan="5">
                  <div className="flex flex-col items-center justify-center py-12 text-gray-400">
                    <Inbox className="w-16 h-16 mb-4 opacity-60" />
                    <p className="text-lg font-medium">No blogs found</p>
                    <p className="text-sm text-gray-400 mt-1">
                      Try adjusting your search
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default ListBlog;
