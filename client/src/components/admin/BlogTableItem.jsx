/* eslint-disable no-unused-vars */
import { assets } from "../../assets/assets";

const BlogTableItem = ({ blog, fetchBlogs, index }) => {
  const { title, createdAt, isPublished } = blog;
  const blogDate = new Date(createdAt).toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <tr className="border-y border-gray-300 text-sm sm:text-base">
      <th scope="row" className="px-2 py-4 font-medium text-gray-800">
        {index}
      </th>

      <td className="px-2 py-4 text-gray-700">{title}</td>

      <td className="px-2 py-4 text-gray-600 max-sm:hidden">{blogDate}</td>

      <td className="px-2 py-4 max-sm:hidden">
        <span
          className={`text-sm font-medium ${
            isPublished ? "text-green-600" : "text-orange-700"
          }`}
        >
          {isPublished ? "Published" : "Draft"}
        </span>
      </td>

      <td className="px-2 py-4 flex items-center gap-3">
        <button
          className="px-3 py-1 text-xs sm:text-sm border border-gray-400 rounded hover:bg-gray-100 transition"
          onClick={() => {
            // Placeholder for publish/unpublish toggle
          }}
        >
          {isPublished ? "Unpublish" : "Publish"}
        </button>

        <button
          aria-label="Delete blog"
          onClick={() => {
            // Placeholder for delete action
          }}
        >
          <img
            src={assets.cross_icon}
            alt="Delete"
            className="w-6 sm:w-8 hover:scale-110 transition-transform cursor-pointer"
          />
        </button>
      </td>
    </tr>
  );
};

export default BlogTableItem;
