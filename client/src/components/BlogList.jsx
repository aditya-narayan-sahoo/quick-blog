import BlogCard from "./BlogCard";
import { useState, useMemo } from "react";
import { blog_data, blogCategories } from "../assets/assets";
import { motion as Motion, AnimatePresence } from "framer-motion";

const BlogList = () => {
  const [menu, setMenu] = useState(blogCategories[0]);

  const filteredBlogs = useMemo(() => {
    return menu === blogCategories[0]
      ? blog_data
      : blog_data.filter((blog) => blog.category === menu);
  }, [menu]);

  return (
    <section className="py-12 px-6 sm:px-12 lg:px-24 max-w-screen-2xl mx-auto">
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {blogCategories.map((category) => (
          <div key={category} className="relative">
            <button
              onClick={() => setMenu(category)}
              className={`relative z-10 text-sm sm:text-base font-medium px-4 py-1.5 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary ${
                menu === category
                  ? "text-white bg-primary"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              {category}
              {menu === category && (
                <Motion.div
                  layoutId="underline"
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="absolute inset-0 bg-primary rounded-full -z-10"
                />
              )}
            </button>
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <Motion.div
          key={menu}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </Motion.div>
      </AnimatePresence>
    </section>
  );
};

export default BlogList;
