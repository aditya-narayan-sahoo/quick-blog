import { assets } from "../../assets/assets";

const CommentTableItem = ({ comment, fetchComments }) => {
  const { blog, createdAt, _id } = comment;
  const blogDate = new Date(createdAt).toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <tr className="border-b border-gray-200 text-sm sm:text-base">
      <td className="px-3 sm:px-6 py-4">
        <div className="text-gray-700 mb-2">
          <span className="font-semibold">Blog</span>: {blog.title}
        </div>
        <div className="text-gray-600">
          <span className="font-semibold">Name</span>: {comment.name}
        </div>
        <div className="text-gray-600">
          <span className="font-semibold">Comment</span>: {comment.content}
        </div>
      </td>

      <td className="px-3 sm:px-6 py-4 max-sm:hidden text-sm text-gray-500">
        {blogDate}
      </td>

      <td className="px-3 sm:px-6 py-4">
        <div className="inline-flex items-center gap-3 sm:gap-4">
          {!comment.isApproved ? (
            <img
              src={assets.tick_icon}
              alt="tick"
              className="w-4 sm:w-5 hover:scale-110 transition-all cursor-pointer"
            />
          ) : (
            <p className="text-xs border border-green-600 bg-green-100 text-green-600 rounded-full px-2 py-0.5">
              Approved
            </p>
          )}
          <img
            src={assets.bin_icon}
            alt="bin"
            className="w-4 sm:w-5 hover:scale-110 transition-all cursor-pointer"
          />
        </div>
      </td>
    </tr>
  );
};

export default CommentTableItem;
