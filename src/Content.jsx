import { EditCapstone } from "./EditCapstone";
import { EditEducation } from "./EditEducation";
import { EditExperience } from "./EditExperience";
import { EditSkill } from "./EditSkill";
import { EditStudent } from "./EditStudent";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";

export function Content() {
  return (
    <div>
      <h1>this is our Content</h1>
      {/* <p>{students[0].first_name}</p> */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/experience" element={<EditExperience />} />
        <Route path="/student" element={<EditStudent />} />
        <Route path="/skill" element={<EditSkill />} />
        <Route path="/education" element={<EditEducation />} />
        <Route path="/capstone" element={<EditCapstone />} />
      </Routes>
    </div>
  );
}
