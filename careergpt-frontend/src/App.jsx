import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing/Landing";
import StudentDetails from "./pages/StudentDetails/StudentDetails";
import Assessment from "./pages/Assessment/Assessment";
import Processing from "./pages/Processing/Processing";
import Report from "./pages/Report/Report";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/student" element={<StudentDetails />} />
      <Route path="/assessment" element={<Assessment />} />
      <Route path="/processing" element={<Processing />} />
      <Route path="/report" element={<Report />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;