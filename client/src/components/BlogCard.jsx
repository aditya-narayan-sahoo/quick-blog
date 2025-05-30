import { useNavigate } from "react-router";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();
  const { title, description, category, image, _id } = blog;

  return (
    <article
      onClick={() => navigate(`/blog/${_id}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && navigate(`/blog/${_id}`)}
      className="w-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 cursor-pointer focus:outline-2 focus:outline-primary group"
    >
      <img
        src={image}
        loading="lazy"
        alt={`Cover image for ${title}`}
        className="aspect-video w-full object-cover group-hover:brightness-95 transition duration-300"
      />
      <div className="p-5">
        <span className="inline-block mb-2 bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
          {category}
        </span>
        <h5 className="text-lg font-semibold text-gray-900 mb-1">{title}</h5>
        <p
          className="text-sm text-gray-600"
          dangerouslySetInnerHTML={{ __html: description.slice(0, 200) }}
        />
      </div>
    </article>
  );
};

export default BlogCard;
