import { Routes, Route } from "react-router";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Error from "./pages/Error";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
