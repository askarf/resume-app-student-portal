import { EditCapstone } from "./EditCapstone";
import { EditEducation } from "./EditEducation";
import { EditExperience } from "./EditExperience";
import { EditSkill } from "./EditSkill";
import { EditStudent } from "./EditStudent";
import { Routes, Route } from "react-router-dom";


export function Content() {
  var students = [
    {
      first_name: "ayala",
      last_name: "karf",
      email: "ayala@example.txt",
      phone_number: "123-456-7890",
      short_bio: "loves to eat",
      linkedin_url: "www.linkedin.com",
      twitter_handle: "@yalakay",
      personal_url: "www.ayala.com",
      online_resume: "ayalasresume.com",
      git_hub: "ayalasgit.com",
      photo: "www.photo.com",
      experience: [
        {
          id: 1,
          start_date: "nov 4",
          end_date: "nov 8",
          job_title: "partners",
          company: "starbucks",
          details: "worked hard to make coffee",
        },
        {
          id: 2,
          start_date: "dec 4",
          end_date: "dec 8",
          job_title: "barista",
          company: "tim hortons",
          details: "worked hard to make good coffee",
        },
      ],
      education: [
        {
          start_date: "nov 2",
          end_date: "jan 7",
          degree: "masters in education",
          university: "u of t",
          detail: "studied hard and now im smart",
        },
        {
          start_date: "dec 2",
          end_date: "jan 7",
          degree: "full stack web developer",
          university: "actualize",
          detail: "studied hard and now im really smart",
        },
      ],
      skills: [{ skill_name: "ruby" }, { skill_name: "vue" }, { skill_name: "react" }],
      capstone: [
        {
          name: "resume-app",
          description: "app for my resume",
          url: "myresumeapp.com",
          screenshot: "myimage.com",
        },
      ],
    },
  ];
  return (
    <div>
      <h1>this is our Content</h1>
      <p>{students[0].first_name}</p>
      <Routes>
        <Route path="/experience" element={<EditExperience students={students} />} />
        <Route path="/student" element={<EditStudent />} />
        <Route path="/skill" element={<EditSkill />} />
        <Route path="/education" element={<EditEducation students={students} />} />
        <Route path="/capstone" element={<EditCapstone />} />
      </Routes>
    </div>
  );
    
  )
}


