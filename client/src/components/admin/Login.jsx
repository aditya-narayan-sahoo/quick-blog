import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO : Implement admin login
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <section
        aria-labelledby="admin-login-heading"
        className="w-full max-w-sm p-6 sm:p-8 bg-white border border-primary/20 shadow-lg rounded-xl"
      >
        <header className="mb-8 text-center">
          <h1
            id="admin-login-heading"
            className="text-4xl font-bold text-gray-800"
          >
            <span className="text-primary">Admin</span> Login
          </h1>
          <p className="text-base text-gray-600 mt-2">
            Enter your credentials to access the <br /> admin dashboard.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6 text-[1rem]">
          <div>
            <label
              htmlFor="email"
              className="block text-base font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
              autoComplete="email"
              className="w-full px-3 py-2 text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-base font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                autoComplete="current-password"
                className="w-full px-3 py-2 text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-primary"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 text-base font-semibold text-white bg-primary rounded-md hover:bg-primary/90 hover:scale-95 transition-all"
          >
            Login
          </button>
        </form>
      </section>
    </main>
  );
};

export default Login;
