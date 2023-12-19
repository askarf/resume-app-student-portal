import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
export function Home(props) {
  const linkedinLogoUrl = "images/linkedin.png";
  const twitterLogoUrl = "images/ex.jpg";
  const githubLogoUrl = "images/github.png";
  const [student, setStudent] = useState({
    experiences: [],
    educations: [],
    skills: [],
    campstones: [],
  });

  const handleStudent = () => {
    axios.get("http://localhost:3000/students/1.json").then((response) => {
      console.log(response.data);
      setStudent(response.data);
    });
  };
  const InfoCard = ({ title, children }) => (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-3xl font-semibold text-blue-900 mb-4">{title}</h2>
      {children}
    </div>
  );
  function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
  }
  function calculateDuration(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const diffInMilliseconds = Math.abs(end - start);
    const days = Math.floor(diffInMilliseconds / (24 * 60 * 60 * 1000));

    const years = Math.floor(days / 365);
    const months = Math.floor((days % 365) / 30);

    const yearString = years > 0 ? `${years} ${years === 1 ? "year" : "years"}` : "";
    const monthString = months > 0 ? `${months} ${months === 1 ? "month" : "months"}` : "";

    const durationString = `${yearString} ${monthString}`.trim();
    return durationString;
  }
  return (
    <div className="text-3xl font-mono text-blue-900">
      <button onClick={handleStudent}>button</button>
      <h1 className="text-center font-mono  pb-40 bg-slate-200 text-blue-900 text-5xl font-bold"></h1>
      <div id="personal-info " className="">
        <div className="flex justify-center items-center">
          <div className="flex h-20 justify-center items-center h-screen">
            <div className="w-44 h-44 border-2 border-blue-900 rounded-full overflow-hidden flex items-center justify-center pt-0 pb-0">
              <img
                src={student.photo}
                alt={`Photo of ${student.first_name}`}
                className="w-full h-44 fill rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* BASIC INFORMATION */}
        <div id="basic-info" className="bg-white rounded-lg shadow-md pb-10">
          <h1 className=" pt-20 text-center font-mono text-blue-900 text-5xl font-bold">
            {student.first_name} {student.last_name}
          </h1>
          <div className="flex flex-col items-center pt-5 ">
            <p className="text-gray-600 pb-2">Name: {student.email}</p>
            <p className="text-gray-600">Email: {student.phone_number}</p>
            <div className="flex mt-4 p-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <a href={student.resume_url} target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4">
                <a href={student.personal_url} target="_blank" rel="noopener noreferrer">
                  Website
                </a>
              </button>
            </div>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex place-content-center  mt-4 p-2">
            <a href={student.twitter_handle} target="_blank" rel="noopener noreferrer" className="mr-4">
              <img src={twitterLogoUrl} alt="Twitter Logo" style={{ width: "50px", height: "50px" }} />
            </a>
            <a href={student.linkedin_url} target="_blank" rel="noopener noreferrer" className="mr-4">
              <img src={linkedinLogoUrl} alt="LinkedIn Logo" style={{ width: "50px", height: "50px" }} />
            </a>
            <a href={student.git_hub} target="_blank" rel="noopener noreferrer">
              <img src={githubLogoUrl} alt="GitHub Logo" style={{ width: "50px", height: "50px" }} />
            </a>
          </div>
        </div>
        <div id="bio" className="pt-10 pb-20 px-8 ">
          <div id="bio" className="pt-10 pb-20 px-8">
            <div className="shadow-lg p-10 mb-10">
              <h2 className="text-3xl font-semibold text-blue-900 mb-4">Biography:</h2>
              <p className="text-2xl font-semibold text-gray-900">{student.short_bio}</p>
            </div>

            {student.experiences && (
              <div className="shadow-lg p-10 mb-10">
                <h2 className="text-3xl font-semibold text-blue-900 mb-4 pb-2 ">Experiences:</h2>
                {student.experiences.map((exp, index) => (
                  <div key={index} className="mb-6 shadow-md p-5">
                    <p>{exp.job_title}</p>

                    <p className="text-2xl font-semibold text-gray-900">{exp.company_name}</p>

                    <p className="pt-4">
                      {formatDate(exp.start_date)} - {formatDate(exp.end_date)}
                    </p>
                    <p className="text-2xl font-semibold text-gray-900">
                      [{calculateDuration(exp.start_date, exp.end_date)}]
                    </p>

                    <p className="text-2xl font-semibold text-gray-900 pt-10">Details:</p>
                    <p>{exp.details}</p>
                  </div>
                ))}
              </div>
            )}

            {student.educations && (
              <div className="shadow-lg p-10 mb-10">
                <h2 className="text-3xl font-semibold text-blue-900 mb-4 ">Educations:</h2>
                {student.educations.map((edu, index) => (
                  <div key={index} className="mb-6 shadow-md p-5">
                    <p className="text-xl font-semibold text-gray-900">University:</p>
                    <p>{edu.university_name}</p>

                    <p className="">
                      {formatDate(edu.start_date)} - {formatDate(edu.end_date)}
                    </p>

                    <p className="text-xl font-semibold text-gray-900">
                      [{calculateDuration(edu.start_date, edu.end_date)}]
                    </p>
                    <p className="text-xl font-semibold text-gray-900 pt-5">Degree:</p>
                    <p>{edu.degree}</p>

                    <p className="text-xl font-semibold text-gray-900 pt-5">Details:</p>
                    <p>{edu.details}</p>
                  </div>
                ))}
              </div>
            )}

            {student.skills && (
              <div className="shadow-lg p-10 mb-10">
                <h2 className="text-3xl font-semibold text-blue-900 mb-4 ">Skills</h2>
                <div className="mb-6 shadow-md p-5">
                  {student.skills.map((skill, index) => (
                    <div key={index} className="mb-6">
                      <p className="text-xl font-semibold text-gray-900">{skill.skill_name}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {student.capstones && (
              <div className="shadow-lg p-10 mb-10">
                <h2 className="text-3xl font-semibold text-blue-900 mb-4 ">Capstones</h2>
                {student.capstones.map((cap, index) => (
                  <div key={index} className="mb-6 shadow-md p-5">
                    <p>{cap.capstone_name}</p>

                    <p className="text-xl font-semibold text-gray-900 pt-5 ">Description:</p>
                    <p className="pb-5">{cap.description}</p>

                    <a
                      href={cap.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block text-lg "
                    >
                      Visit Project
                    </a>

                    <p className="text-xl font-semibold text-gray-900 pt-5">Screenshot:</p>
                    <div style={{ maxHeight: "230px", overflowY: "auto" }}>
                      <img src={cap.screenshot} alt={`Screenshot of ${cap.name}`} className="w-full h-auto" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
