import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";

const AcademicJourney = lazy(() => import("./components/AcademicJourney"));
const APELLaboratory = lazy(() => import("./components/APELLaboratory"));
const IPECLaboratory = lazy(() => import("./components/IPECLaboratory"));
const AcademicActivity = lazy(() => import("./pages/AcademicActivity"));
const Admin = lazy(() => import("./pages/Admin"));
const Outreach = lazy(() => import("./pages/Outreach"));
const ProjectBasedLearning = lazy(() => import("./pages/ProjectBasedLearning"));
const Projects = lazy(() => import("./pages/Projects"));
const Publications = lazy(() => import("./pages/Publications"));
const Thesis = lazy(() => import("./pages/Thesis"));

function PageLoader() {
  return (
    <main className="site-shell grid min-h-screen place-items-center px-6 text-slate-600" id="main-content">
      <p className="lab-surface px-6 py-4" role="status">Loading page...</p>
    </main>
  );
}

function App() {
  const location = useLocation();
  const currentPath = location.pathname.replace(/\/+$/, "") || "/";
  const isAdminPage = currentPath === "/admin";

  return (
    <>
      {!isAdminPage && <Navbar />}
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/academic-journey" element={<AcademicJourney />} />
          <Route path="/laboratories/ipec" element={<IPECLaboratory />} />
          <Route path="/laboratories/apel" element={<APELLaboratory />} />
          <Route path="/research/publications" element={<Publications />} />
          <Route path="/research/projects" element={<Projects />} />
          <Route path="/research/project-based-learning" element={<ProjectBasedLearning />} />
          <Route path="/research/thesis" element={<Thesis />} />
          <Route path="/activities/:activity" element={<AcademicActivity />} />
          <Route path="/outreach" element={<Outreach />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
