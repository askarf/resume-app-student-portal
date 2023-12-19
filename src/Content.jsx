import { Home } from "./Home";
import { useState } from "react";
import { EditCapstone } from "./EditCapstone";
import { EditEducation } from "./EditEducation";
import { EditExperience } from "./EditExperience";
import { EditSkill } from "./EditSkill";
import { EditStudent } from "./EditStudent";
import { Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import axios from "axios";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Content() {
  const [student, setStudent] = useState({});
  const [errors, setErrors] = useState([]);
  const [studentId, setStudentId] = useState(localStorage.getItem("studentId"));

  const handleSubmit = (params) => {
    console.log("submitting login form");
    setErrors([]);
    axios
      .post("http://localhost:3000/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        setStudentId(response.data.student_id);
        localStorage.setItem("studentId", response.data.student_id);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  const handleShowStudent = (id) => {
    axios.get(`http://localhost:3000/students/${id}.json`).then((response) => {
      setStudent(response.data);
    });
  };

  let homePage;
  if (localStorage.jwt === undefined) {
    homePage = (
      <div>
        <Login handleSubmit={handleSubmit} errors={errors} />
      </div>
    );
  } else {
    homePage = (
      <div>
        <Home studentId={studentId} />
      </div>
    );
  }
  return (
    <div>
      <button onClick={() => console.log(studentId)}>button</button>
      <Routes>
        <Route
          path="/experience"
          element={<EditExperience onShowStudent={handleShowStudent} studentId={studentId} student={student} />}
        />
        <Route
          path="/student"
          element={<EditStudent onShowStudent={handleShowStudent} studentId={studentId} student={student} />}
        />
        <Route path="/skill" element={<EditSkill />} />
        <Route path="/education" element={<EditEducation />} />
        <Route path="/capstone" element={<EditCapstone />} />
        <Route path="/" element={homePage} />
      </Routes>
    </div>
  );
}
