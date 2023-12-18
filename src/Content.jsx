import { EditCapstone } from "./EditCapstone";
import { EditEducation } from "./EditEducation";
import { EditExperience } from "./EditExperience";
import { EditSkill } from "./EditSkill";
import { EditStudent } from "./EditStudent";

export function Content() {
  var students = [
    {
      first_name: "ayala",
      last_name: "karf",
      email: "ayala@example.txt",
      phone_number: "123-456-7890",
      short_bio: "loves to eat",
      linkedin_url: "https://www.linkedin.com/in/ayala-karfunkel/",
      twitter_handle: "https://twitter.com/login",
      personal_url: "https://en.wikipedia.org/wiki/Maisie_Williams",
      online_resume: "ayalasresume.com",
      git_hub: "https://github.com/askarf",
      photo: "images/ayala.webp",
      experience: [
        {
          start_date: "nov 4",
          end_date: "nov 8",
          job_title: "partners",
          company: "starbucks",
          details: "worked hard to make coffee",
        },
        {
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

  const linkedinLogoUrl = "images/linkedin.png";
  const twitterLogoUrl = "images/ex.jpg";
  const githubLogoUrl = "images/github.png";
  return (
    <div>
      <h1>this is our Content</h1>
      <p>{students[0].first_name}</p>
      <p>{students[0].last_name}</p>
      <p>{students[0].email}</p>
      <p>{students[0].phone_number}</p>
      <p>{students[0].short_bio}</p>
      <a href={students[0].twitter_handle} target="_blank" rel="noopener noreferrer">
        <img
          src={twitterLogoUrl}
          alt="twitter Logo"
          style={{ width: "50px", height: "50px" }} // Adjust the size as needed
        />
      </a>
      <a href={students[0].linkedin_url} target="_blank" rel="noopener noreferrer">
        <img
          src={linkedinLogoUrl}
          alt="LinkedIn Logo"
          style={{ width: "50px", height: "50px" }} // Adjust the size as needed
        />
      </a>
      <a href={students[0].git_hub} target="_blank" rel="noopener noreferrer">
        <img
          src={githubLogoUrl}
          alt="twitter Logo"
          style={{ width: "50px", height: "50px" }} // Adjust the size as needed
        />
      </a>
      <p>
        <a href={students[0].personal_url} target="_blank" rel="noopener noreferrer">
          My Personal Website
        </a>
      </p>
      <p>{students[0].online_resume}</p>

      <img
        src={students[0].photo}
        alt={`Photo of ${students[0].first_name}`}
        style={{ width: "200px", height: "auto" }}
      />

      {students[0].experience.map((exp, index) => (
        <div key={index}>
          <p>Start Date: {exp.start_date}</p>
          <p>End Date: {exp.end_date}</p>
          <p>Job Title: {exp.job_title}</p>
          <p>Company: {exp.company}</p>
          <p>Details: {exp.details}</p>
        </div>
      ))}
      {students[0].education.map((edu, index) => (
        <div key={index}>
          <p>Start Date: {edu.start_date}</p>
          <p>End Date: {edu.end_date}</p>
          <p>Degree: {edu.degree}</p>
          <p>University: {edu.university}</p>
          <p>Detail: {edu.detail}</p>
        </div>
      ))}
      {students[0].skills.map((skill, index) => (
        <div key={index}>
          <p>Skill: {skill.skill_name}</p>
        </div>
      ))}
      {students[0].capstone.map((cap, index) => (
        <div key={index}>
          <p>Name: {cap.name}</p>
          <p>Description: {cap.description}</p>
          <p>Url: {cap.url}</p>
          <p>Screenshot: {cap.screenshot}</p>
        </div>
      ))}

      <EditStudent />
      <EditSkill />
      <EditExperience />
      <EditEducation />
      <EditCapstone />
    </div>
  );
}
