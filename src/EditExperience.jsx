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
    <div className="shadow-lg px-10 pb-10 pt-5 mb-10">
      <h1 className="text-3xl font-semibold text-blue-900 mb-4 ">Experience</h1>
      <p className="text-2xl font-semibold text-blue-700 mb-4 pb-2 underline py-5">{props.student.first_name}</p>
      <div>
        {props.student.experiences && props.student.experiences.length > 0 ? (
          props.student.experiences.map((experience) => (
            <form
              key={experience.id}
              className="mb-6 border border-gray-200 shadow-lg rounded p-5"
              onSubmit={(event) => handleEditExperience(experience.id, event)}
            >
              <div className="text-2xl font-semibold text-gray-900">
                Start Date:{" "}
                <input
                  defaultValue={experience.start_date}
                  name="start_date"
                  type="text"
                  className="text-mds font-semibold text-blue-800"
                />
              </div>
              <div className="text-2xl font-semibold text-gray-900">
                End Date:{" "}
                <input
                  defaultValue={experience.end_date}
                  name="end_date"
                  type="text"
                  className="text-mds font-semibold text-blue-800"
                />
              </div>
              <div className="text-2xl font-semibold text-gray-900">
                Job Title:{" "}
                <input
                  defaultValue={experience.job_title}
                  name="job_title"
                  type="text"
                  className="text-mds font-semibold text-blue-800"
                />
              </div>
              <div className="text-2xl font-semibold text-gray-900">
                Company Name:{" "}
                <input
                  defaultValue={experience.company_name}
                  name="company_name"
                  type="text"
                  className="text-mds font-semibold text-blue-800"
                />
              </div>
              <div className="text-2xl font-semibold text-gray-900">
                Details:{" "}
                <input
                  defaultValue={experience.details}
                  name="details"
                  type="text"
                  className="text-mds font-semibold text-blue-800"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 mt-3"
              >
                Update Info
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded px-2 "
                onClick={() => handleDeleteExperince(experience.id)}
              >
                Delete
              </button>
            </form>
          ))
        ) : (
          <p>No experiences available</p>
        )}
      </div>
      <div>
        <form onSubmit={handleCreateExperience} className="mb-6 border border-gray-200 shadow-lg rounded p-5">
          <div className="text-2xl font-semibold text-gray-900">
            Start Date:{" "}
            <input
              name="start_date"
              type="text"
              className="text-mds font-semibold text-blue-800 bg-gray-200 rounded ml-2"
            />
          </div>
          <div className="text-2xl font-semibold text-gray-900">
            End Date:{" "}
            <input
              name="end_date"
              type="text"
              className="text-mds font-semibold text-blue-800 bg-gray-200 rounded ml-2 mt-3"
            />
          </div>
          <div className="text-2xl font-semibold text-gray-900">
            Job Title:{" "}
            <input
              name="job_title"
              type="text"
              className="text-mds font-semibold text-blue-800 bg-gray-200 rounded ml-2 mt-3"
            />
          </div>
          <div className="text-2xl font-semibold text-gray-900">
            Company Name:{" "}
            <input
              name="company_name"
              type="text"
              className="text-mds font-semibold text-blue-800 bg-gray-200 rounded ml-2 mt-3"
            />
          </div>
          <div className="text-2xl font-semibold text-gray-900 flex flex-col">
            <label htmlFor="details" className="mb-1 mt-2">
              Details:
            </label>
            <textarea
              id="details"
              name="details"
              className="text-md font-semibold text-blue-800 bg-gray-200 rounded p-2"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded px-2 mt-4"
          >
            Add Experience
          </button>
        </form>
      </div>
    </div>
  );
}
