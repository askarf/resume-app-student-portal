/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import axios from "axios";

export function EditExperience(props) {
  useEffect(() => {
    props.onShowStudent(props.studentId);
  }, []);

  const handleEditExperience = (id, event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.patch(`http://localhost:3000/experiences/${id}.json`, params).then((response) => {
      console.log(response.data);
      console.log(params);
      window.location.reload();
    });
  };

  const handleCreateExperience = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.post(`http://localhost:3000/experiences.json`, params).then((response) => {
      console.log(response.data);
      window.location.reload();
    });
  };

  const handleDeleteExperince = (id) => {
    axios.delete(`http://localhost:3000/experiences/${id}.json`).then((response) => {
      console.log(response.data);
      window.location.reload();
    });
  };

  return (
    <div>
      <h1>Experience</h1>
      <p>{props.student.first_name}</p>
      <div>
        {props.student.experiences && props.student.experiences.length > 0 ? (
          props.student.experiences.map((experience) => (
            <form key={experience.id} onSubmit={(event) => handleEditExperience(experience.id, event)}>
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
              <button type="submit">Update Info</button>
              <button onClick={() => handleDeleteExperince(experience.id)}>Delete</button>
              <p>-------</p>
            </form>
          ))
        ) : (
          <p>No experiences available</p>
        )}
      </div>
      <div>
        <form onSubmit={handleCreateExperience}>
          <div>
            Start Date: <input name="start_date" type="text" />
          </div>
          <div>
            End Date: <input name="end_date" type="text" />
          </div>
          <div>
            Job Title: <input name="job_title" type="text" />
          </div>
          <div>
            Company Name: <input name="company_name" type="text" />
          </div>
          <div>
            Details: <input name="details" type="text" />
          </div>
          <button type="submit">Add Experience</button>
        </form>
      </div>
    </div>
  );
}
