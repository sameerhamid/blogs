import BlogDetails from "./BlogDetails";
import Create from "./Create";
import Home from "./Home";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/create" element={<Create />} />
        </Routes>
        <Routes>
          <Route path="/blogs/:id" element={<BlogDetails />} />
        </Routes>

        {/* <Routes>
          <Route path="*" element={<NotFound />} />
        </Routes> */}
      </div>
    </div>
  );
}

export default App;
