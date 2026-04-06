import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Layouts */
import MainLayout from "./layouts/MainLayout";

/* Pages*/
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Project01 from "./pages/Project-Human";
import Project02 from "./pages/Project-Integration";
import Project03 from "./pages/Project-Manner";
import Project04 from "./pages/Project-Millenia";
import Project05 from "./pages/Project-Nxt";

/* Routing */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blog" element={<Blog />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />

          <Route path="projects/when-ai-and-humans-meet" element={<Project01 />} />
          <Route path="projects/what-seamless-integration-looks-like" element={<Project02 />} />
          <Route path="projects/how-to-build-something-good" element={<Project03 />} />
          <Route path="projects/why-simple-is-sometimes-better" element={<Project04 />} />
          <Route path="projects/where-do-we-go-from-here" element={<Project05 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}