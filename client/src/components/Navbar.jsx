import { assets } from "../assets/assets";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center p-4 sm:px-8 xl:px-16 bg-white shadow-sm sticky top-0 z-50">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => navigate("/")}
        aria-label="Go to homepage"
      >
        <img
          src={assets.logo}
          alt="App Logo"
          className="w-28 sm:w-36 transition-transform duration-200 hover:scale-110"
        />
      </div>

      <button
        onClick={() => navigate("/admin")}
        className="flex items-center gap-2 bg-primary text-white font-medium px-5 py-2.5 sm:px-8 sm:py-3 rounded-xl shadow-md hover:bg-primary/90 active:scale-95 transition-all duration-200 hover:cursor-pointer hover:scale-90"
        aria-label="Login to Admin Panel"
      >
        Login
        <img src={assets.arrow} alt="Arrow Icon" className="w-3 sm:w-4" />
      </button>
    </nav>
  );
};

export default Navbar;
