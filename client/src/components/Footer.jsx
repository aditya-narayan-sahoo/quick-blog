import { assets, footer_data } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-primary/5 px-6 md:px-16 lg:px-24 xl:px-32">
      <main className="py-12 border-b border-gray-300/30 text-gray-600 grid grid-cols-1 md:grid-cols-2 gap-10">
        <section>
          <img
            src={assets.logo}
            alt="QuickBlog logo"
            className="w-32 sm:w-44"
          />
          <p className="mt-6 max-w-md text-sm leading-relaxed text-gray-500">
            QuickBlog is your go-to source for insightful tech blogs, industry
            news, and tutorials designed to keep developers, creators, and tech
            enthusiasts informed and inspired.
          </p>
        </section>

        <section className="grid grid-cols-3 gap-8">
          {footer_data.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-gray-900 mb-3 text-base">
                {section.title}
              </h3>
              <ul className="space-y-1 text-sm">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="hover:underline hover:text-gray-800 transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </main>

      <div className="py-6 text-center text-xs sm:text-sm text-gray-500">
        © 2025 QuickBlog. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
