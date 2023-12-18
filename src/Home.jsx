export function Home() {
  var students = [
    {
      first_name: "Ayala",
      last_name: "Karfunkel",
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
      <h1 className="text-center text-2xl font-mono pt-10 pb-10 bg-rose-50 text-blue-900">
        {students[0].first_name} {students[0].last_name}
      </h1>
      <div id="personal-info " className="text-center">
        <div className="flex justify-center items-center">
          <div className="flex h-20 justify-center items-center h-screen">
            <div className="w-32 h-32 border-2 border-black rounded-full overflow-hidden flex items-center justify-center pt-0 pb-0">
              <img
                src={students[0].photo}
                alt={`Photo of ${students[0].first_name}`}
                className="w-full h-auto rounded-full"
              />
            </div>
          </div>
        </div>

        <div
          className="flex flex-col items-center pt-8
        "
        >
          <p className="text-gray-600">{students[0].email}</p>
          <p className="text-gray-600">{students[0].phone_number}</p>
        </div>

        <div className="flex mt-4">
          <a href={students[0].twitter_handle} target="_blank" rel="noopener noreferrer" className="mr-4">
            <img src={twitterLogoUrl} alt="Twitter Logo" style={{ width: "50px", height: "50px" }} />
          </a>
          <a href={students[0].linkedin_url} target="_blank" rel="noopener noreferrer" className="mr-4">
            <img src={linkedinLogoUrl} alt="LinkedIn Logo" style={{ width: "50px", height: "50px" }} />
          </a>
          <a href={students[0].git_hub} target="_blank" rel="noopener noreferrer">
            <img src={githubLogoUrl} alt="GitHub Logo" style={{ width: "50px", height: "50px" }} />
          </a>
        </div>
        <p>{students[0].online_resume}</p>
        <p>{students[0].short_bio}</p>

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
      </div>
    </div>
  );
}
