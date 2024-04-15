import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./infrastructure/navigation/navigation";
import { Home } from "./pages/home/home.pages";
import { About } from "./pages/about/about.pages";
import { ProjectPage } from "./pages/projects/projects.pages";
import { Contact } from "./pages/contact/contact.pages";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} replace={true} />
          <Route path="projects" element={<ProjectPage />} replace={true} />
          <Route path="contact" element={<Contact />} replace={true} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
