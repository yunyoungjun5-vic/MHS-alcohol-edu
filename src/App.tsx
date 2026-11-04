import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Header, Footer } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { DirectorProfile } from "./pages/about/DirectorProfile";
import { Experts } from "./pages/about/Experts";
import { MediaCoverage } from "./pages/MediaCoverage";
import { Partnerships } from "./pages/Partnerships";
import { Counseling } from "./pages/services/Counseling";
import { Education } from "./pages/services/Education";
import { Treatment } from "./pages/services/Treatment";
import { LegalCollaboration } from "./pages/services/LegalCollaboration";
import { Program } from "./pages/Program";
import { Cases } from "./pages/Cases";
import { Column } from "./pages/Column";
import { OnlineProgram } from "./pages/OnlineProgram";
import { Sentencing } from "./pages/Sentencing";
import { Pricing } from "./pages/Pricing";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/director" element={<DirectorProfile />} />
            <Route path="/about/experts" element={<Experts />} />
            <Route path="/about/media" element={<MediaCoverage />} />
            <Route path="/about/partnerships" element={<Partnerships />} />
            <Route
              path="/about/location"
              element={<Navigate to="/" replace />}
            />
            <Route
              path="/services"
              element={<Navigate to="/services/counseling" replace />}
            />
            <Route path="/services/counseling" element={<Counseling />} />
            <Route path="/services/education" element={<Education />} />
            <Route path="/services/treatment" element={<Treatment />} />
            <Route
              path="/services/legal-collaboration"
              element={<LegalCollaboration />}
            />
            <Route path="/program" element={<Program />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/library/column" element={<Column />} />
            <Route path="/library/cases" element={<Cases />} />
            <Route path="/online-program" element={<OnlineProgram />} />
            <Route path="/sentencing" element={<Sentencing />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
