import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Error() {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const countdown = setInterval(() => {
      setSeconds((prev) => {
        if (prev === 1) {
          clearInterval(countdown);
          navigate(-1); // Go back
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [navigate]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <section className="text-center max-w-md">
        <header className="mb-6">
          <h1 className="text-8xl font-bold text-red-600 mb-2">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800">
            Page Not Found
          </h2>
        </header>
        <p className="text-gray-600 mb-4">
          You'll be redirected back automatically in{" "}
          <span className="font-semibold">{seconds}</span> second
          {seconds !== 1 && "s"}.
        </p>
        <nav>
          <button
            onClick={() => navigate("/")}
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Go to Home Page
          </button>
        </nav>
      </section>
    </main>
  );
}
