/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";

export function EditExperience(props) {
  useEffect(() => {
    props.onShowStudent(props.studentId);
  }, []);

  return (
    <div>
      <h1>Experience</h1>
      <p>{props.student.first_name}</p>
      <div>
        {props.student.experiences && props.student.experiences.length > 0 ? (
          props.student.experiences.map((experience) => (
            <form key={experience.id}>
              <div>
                Start Date: <input defaultValue={experience.start_date} name="start_date" type="text" />
              </div>
              <div>
                End Date: <input defaultValue={experience.end_date} name="end_date" type="text" />
              </div>
              <div>
                Job Title: <input defaultValue={experience.job_title} name="job_title" type="text" />
              </div>
              <div>
                Company Name: <input defaultValue={experience.company_name} name="company_name" type="text" />
              </div>
              <div>
                Details: <input defaultValue={experience.details} name="details" type="text" />
              </div>
            </form>
          ))
        ) : (
          <p>No experiences available</p>
        )}
        <button>Update Info</button>
      </div>
    </div>
  );
}
