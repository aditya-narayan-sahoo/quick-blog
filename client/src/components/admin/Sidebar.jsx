import { NavLink } from "react-router";
import { assets } from "../../assets/assets";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed md:static rounded z-40 bg-white border-r border-gray-200 min-h-full pt-6 transition-transform duration-300 w-64 md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <NavLink
          end
          to="/admin"
          className={({ isActive }) =>
            `flex items-center gap-3 py-3.5 px-3 md:px-9 cursor-pointer ${
              isActive && "bg-primary/15 border-r-4 border-primary"
            }`
          }
        >
          <img src={assets.home_icon} alt="home" className="w-5" />
          <p className="inline-block">Dashboard</p>
        </NavLink>

        <NavLink
          to="/admin/add-blog"
          className={({ isActive }) =>
            `flex items-center gap-3 py-3.5 px-3 md:px-9 cursor-pointer ${
              isActive && "bg-primary/15 border-r-4 border-primary"
            }`
          }
        >
          <img src={assets.add_icon} alt="add" className="w-5" />
          <p className="inline-block">Add Blogs</p>
        </NavLink>

        <NavLink
          to="/admin/list-blog"
          className={({ isActive }) =>
            `flex items-center gap-3 py-3.5 px-3 md:px-9 cursor-pointer ${
              isActive && "bg-primary/15 border-r-4 border-primary"
            }`
          }
        >
          <img src={assets.list_icon} alt="list" className="w-5" />
          <p className="inline-block">Blog Lists</p>
        </NavLink>

        <NavLink
          to="/admin/comments"
          className={({ isActive }) =>
            `flex items-center gap-3 py-3.5 px-3 md:px-9 cursor-pointer ${
              isActive && "bg-primary/15 border-r-4 border-primary"
            }`
          }
        >
          <img src={assets.comment_icon} alt="comment" className="w-5" />
          <p className="inline-block">Comments</p>
        </NavLink>
      </div>
    </>
  );
};

export default Sidebar;
