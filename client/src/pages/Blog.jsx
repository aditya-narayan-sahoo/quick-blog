import Moment from "moment";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { assets, blog_data, comments_data } from "../assets/assets";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Error from "./Error";

const Blog = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [data, setData] = useState(null);
  const [content, setContent] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const blog = blog_data.find((item) => item._id === id);
    setData(blog);
    setComments(comments_data);
  }, [id]);

  const addComment = (e) => {
    e.preventDefault();
  };

  if (!data) return <Error />;

  return (
    <div className="relative">
      <img
        src={assets.gradientBackground}
        alt="gradient"
        className="absolute -top-52 -z-10 opacity-50 w-full"
      />
      <Navbar />

      <header className="text-center mt-20 px-4 text-gray-700">
        <p className="text-primary font-medium py-4">
          Published on {Moment(data.date).format("Do MMMM, YYYY")}
        </p>
        <h1 className="text-2xl sm:text-4xl font-semibold max-w-3xl mx-auto text-gray-900">
          {data.title}
        </h1>
        <h2 className="my-4 max-w-xl text-base text-gray-500 mx-auto">
          {data.subTitle}
        </h2>
        <div className="inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/30 bg-primary/10 font-medium text-primary">
          Carl Johnson
        </div>
      </header>

      <main className="mx-4 md:mx-auto max-w-5xl my-12 space-y-16">
        <div>
          <img
            src={data.image}
            alt="blog"
            className="rounded-3xl mb-6 w-full"
          />
          <article
            className="prose max-w-3xl mx-auto prose-p:leading-relaxed prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        </div>

        <section className="max-w-3xl mx-auto">
          <h3 className="font-semibold text-lg mb-4">
            Comments ({comments.length})
          </h3>
          <div className="flex flex-col gap-4">
            {comments.map((comment, idx) => (
              <div
                key={idx}
                className="relative bg-primary/5 border border-primary/10 rounded p-4 text-gray-700"
              >
                <div className="flex items-center gap-2 mb-2">
                  <img src={assets.user_icon} alt="user" className="w-6" />
                  <p className="font-medium">{comment.name}</p>
                </div>
                <p className="text-sm ml-8">{comment.content}</p>
                <span className="absolute right-4 bottom-3 text-xs text-gray-500">
                  {Moment(comment.createdAt).fromNow()}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-3xl mx-auto">
          <h4 className="font-semibold mb-4">Add a comment</h4>
          <form onSubmit={addComment} className="space-y-4 max-w-lg">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              className="w-full p-3 border border-gray-300 rounded focus:ring-primary focus:outline-none"
            />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Your comment"
              required
              className="w-full p-3 border border-gray-300 rounded h-40 focus:ring-primary focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition focus:ring-2 focus:ring-primary hover:scale-95"
            >
              Comment
            </button>
          </form>
        </section>

        <section className="max-w-3xl mx-auto text-center">
          <p className="font-medium mb-4">Share this article</p>
          <div className="flex justify-center gap-4">
            <img src={assets.facebook_icon} alt="facebook" width={40} />
            <img src={assets.twitter_icon} alt="twitter" width={40} />
            <img src={assets.googleplus_icon} alt="google+" width={40} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
