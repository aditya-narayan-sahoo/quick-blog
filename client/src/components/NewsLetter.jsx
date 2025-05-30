const NewsLetter = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center space-y-4 my-32 px-4">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
        Never Miss a Blog!
      </h2>
      <p className="text-sm md:text-lg text-gray-600">
        Subscribe to get the latest blog posts, tech updates, and exclusive
        content directly to your inbox.
      </p>

      <form
        className="flex w-full max-w-xl flex-col sm:flex-row items-center gap-3 mt-4"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          type="email"
          required
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-md border border-gray-300 text-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-primary focus:outline-none transition"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition focus:outline-none focus:ring-2 focus:ring-primary hover:scale-95 cursor-pointer"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default NewsLetter;
