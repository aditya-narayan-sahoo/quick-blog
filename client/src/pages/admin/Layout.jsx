import { assets } from "../../assets/assets";
import { Outlet, useNavigate } from "react-router";
import Sidebar from "../../components/admin/Sidebar";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Layout = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <section className="flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-slate-200 bg-white">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="md:hidden block"
          >
            {isSidebarOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
          <img
            src={assets.logo}
            alt="logo"
            onClick={() => navigate("/")}
            className="w-32 sm:w-40 cursor-pointer hover:scale-105 transition-all duration-200"
          />
        </div>

        <button
          onClick={() => navigate("/")}
          className="text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer hover:scale-95 hover:bg-primary/90 transition-all duration-200"
        >
          Logout
        </button>
      </section>

      <section className="flex h-[calc(100vh-70px)]">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default Layout;
