import { Routes, Route } from "react-router";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Error from "./pages/Error";

import Layout from "./pages/admin/Layout";
import AddBlog from "./pages/admin/AddBlog";
import Comments from "./pages/admin/Comments";
import ListBlog from "./pages/admin/ListBlog";
import Dashboard from "./pages/admin/Dashboard";
import Login from "./components/admin/Login";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="*" element={<Error />} />
        <Route path="/admin" element={true ? <Layout /> : <Login />}>
          <Route index element={<Dashboard />} />
          <Route path="add-blog" element={<AddBlog />} />
          <Route path="comments" element={<Comments />} />
          <Route path="list-blog" element={<ListBlog />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
