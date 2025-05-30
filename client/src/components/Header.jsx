import { assets } from "../assets/assets";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header className="relative px-6 sm:px-16 xl:px-24 overflow-hidden">
      <img
        src={assets.gradientBackground}
        alt="Decorative gradient background"
        className="absolute -top-52 left-0 w-full opacity-40 -z-10 pointer-events-none"
      />

      <section className="text-center mt-24 mb-12 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-3 px-5 py-1.5 mb-6 border border-primary/50 bg-primary/10 rounded-full text-sm text-primary font-medium">
          <p>New: AI features integrated</p>
          <img src={assets.star_icon} alt="Star icon" className="w-3" />
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold leading-tight text-gray-800">
          Your own <span className="text-primary">blogging</span>
          <br /> platform.
        </h1>

        <p className="mt-6 mb-10 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          <span className="font-semibold">QuickBlog</span> provides a space to
          think out loud, to share what matters, and to write without filters.
          Whether it&apos;s one word or a thousand, your stories start here.
        </p>

        <form
          className="flex max-w-lg w-full mx-auto bg-white border border-gray-300 rounded-xl shadow-sm transition-all focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="relative flex-1">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search for blogs"
              required
              className="w-full pl-10 pr-4 py-2 sm:py-3 text-sm sm:text-base text-gray-800 focus:outline-none rounded-l-xl"
              aria-label="Search blogs"
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-white text-sm sm:text-base font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-r-xl transition hover:bg-primary/90"
          >
            Search
          </button>
        </form>
      </section>
    </header>
  );
};

export default Header;
