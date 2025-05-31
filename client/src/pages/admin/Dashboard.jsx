import { FileX } from "lucide-react";
import { useEffect, useState } from "react";
import { assets, dashboard_data } from "../../assets/assets";
import BlogTableItem from "../../components/admin/BlogTableItem";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: [],
  });
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const fetchDashboardData = async () => {
    setDashboardData(dashboard_data);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const filteredBlogs = dashboardData.recentBlogs.filter((blog) => {
    const matchesSearch = blog.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesFilter =
      filter === "all" ||
      (filter === "published" && blog.isPublished) ||
      (filter === "draft" && !blog.isPublished);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="flex-1 p-4 md:p-10 bg-blue-50/50">
      <section className="flex flex-wrap justify-center gap-4 mb-8">
        {[
          {
            label: "Blogs",
            icon: assets.dashboard_icon_1,
            value: dashboardData.blogs,
          },
          {
            label: "Comments",
            icon: assets.dashboard_icon_2,
            value: dashboardData.comments,
          },
          {
            label: "Drafts",
            icon: assets.dashboard_icon_3,
            value: dashboardData.drafts,
          },
        ].map(({ label, icon, value }) => (
          <div
            key={label}
            className="flex items-center gap-4 bg-white px-4 py-3 w-full sm:w-[260px] rounded shadow cursor-pointer hover:scale-105 transition-all"
          >
            <img src={icon} alt={label} className="w-8 h-8" />
            <div>
              <p className="text-xl font-semibold text-gray-600">{value}</p>
              <p className="text-gray-400 font-light">{label}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="max-w-5xl mx-auto">
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 px-1 lg:px-7 text-gray-700">
          <div className="flex items-center gap-3">
            <img
              src={assets.dashboard_icon_4}
              alt="Latest Blogs"
              className="w-5 h-5"
            />
            <h2 className="text-lg font-medium">Latest Blogs</h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search by title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border px-3 py-1.5 rounded text-sm w-full sm:w-64 focus:outline-none"
            />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border px-3 py-1.5 rounded text-sm bg-white w-full sm:w-40 focus:outline-none"
            >
              <option value="all">All</option>
              <option value="published">Published</option>
              <option value="draft">Drafts</option>
            </select>
          </div>
        </header>

        <div className="relative overflow-x-auto shadow rounded-lg scrollbar-hide bg-white">
          <table className="w-full text-sm text-gray-600">
            <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-2 py-4 xl:px-6">#</th>
                <th className="px-2 py-4">Blog Title</th>
                <th className="px-2 py-4 max-sm:hidden">Date</th>
                <th className="px-2 py-4 max-sm:hidden">Status</th>
                <th className="px-2 py-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBlogs.length > 0 ? (
                filteredBlogs.map((blog, index) => (
                  <BlogTableItem
                    key={blog._id}
                    blog={blog}
                    fetchBlogs={fetchDashboardData}
                    index={index + 1}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan="5">
                    <div className="flex flex-col items-center justify-center py-8 text-gray-400">
                      <FileX className="size-14 mb-4 opacity-60" />
                      <p className="text-lg font-medium">No blogs found</p>
                      <p className="text-sm text-gray-400 mt-1">
                        Try adjusting your filters or search
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
