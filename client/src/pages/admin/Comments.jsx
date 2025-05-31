import { useEffect, useState } from "react";
import { comments_data } from "../../assets/assets";
import CommentTableItem from "../../components/admin/CommentTableItem";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [filter, setFilter] = useState("Not Approved");

  const fetchComments = async () => setComments(comments_data);

  useEffect(() => {
    fetchComments();
  }, []);

  const filteredComments = comments.filter((comment) => {
    if (filter === "Approved") return comment.isApproved;
    if (filter === "Not Approved") return !comment.isApproved;
    return true;
  });

  return (
    <main className="flex-1 py-5 px-4 sm:px-6 sm:py-12 bg-blue-50/50 flex justify-center">
      <div className="w-full max-w-5xl">
        <section className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <h1 className="text-xl font-semibold text-gray-800">Comments</h1>
          <div className="flex gap-2 flex-wrap">
            {["All", "Approved", "Not Approved"].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`shadow-sm border rounded-full px-3 py-1 text-xs sm:text-sm transition ${
                  filter === status
                    ? "text-primary border-primary"
                    : "text-gray-700 border-gray-300"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </section>

        <section className="mt-6 overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="w-full text-sm text-gray-600">
            <thead className="text-xs sm:text-sm text-gray-700 uppercase border-b border-gray-200 bg-gray-50">
              <tr>
                <th className="px-4 sm:px-6 py-3 text-left">
                  Blog Title & Comment
                </th>
                <th className="px-4 sm:px-6 py-3 text-left max-sm:hidden">
                  Date
                </th>
                <th className="px-4 sm:px-6 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredComments.map((comment, index) => (
                <CommentTableItem
                  key={comment._id}
                  index={index + 1}
                  comment={comment}
                  fetchComments={fetchComments}
                />
              ))}
              {filteredComments.length === 0 && (
                <tr>
                  <td colSpan="3" className="text-center py-8 text-gray-400">
                    No comments to display.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
};

export default Comments;
