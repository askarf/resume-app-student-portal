/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import axios from "axios";

export function EditCapstone(props) {
  useEffect(() => {
    props.onShowStudent(props.studentId);
  }, []);

  const handleEditCapstone = (id, event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.patch(`http://localhost:3000/capstones/${id}.json`, params).then((response) => {
      console.log(response.data);
      console.log(params);
      window.location.reload();
    });
  };

  const handleCreateCapstone = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.post(`http://localhost:3000/capstones.json`, params).then((response) => {
      console.log(response.data);
      window.location.reload();
    });
  };

  const handleDeleteCapstone = (id) => {
    axios.delete(`http://localhost:3000/capstones/${id}.json`).then((response) => {
      console.log(response.data);
      window.location.reload();
    });
  };

  return (
    <div>
      <h1>Capstone</h1>
      <p>{props.student.first_name}</p>
      <div>
        {props.student.capstones && props.student.capstones.length > 0 ? (
          props.student.capstones.map((capstone) => (
            <form key={capstone.id} onSubmit={(event) => handleEditCapstone(capstone.id, event)}>
              <div>
                Name: <input defaultValue={capstone.capstone_name} name="capstone_name" type="text" />
              </div>
              <div>
                Description: <input defaultValue={capstone.description} name="description" type="text" />
              </div>
              <div>
                Url: <input defaultValue={capstone.url} name="url" type="text" />
              </div>
              <div>
                Screenshot: <input defaultValue={capstone.screenshot} name="screenshot" type="text" />
              </div>
              <div>
                Details: <input defaultValue={capstone.details} name="details" type="text" />
              </div>
              <button type="submit">Update Info</button>
              <button onClick={() => handleDeleteCapstone(capstone.id)}>Delete</button>
              <p>-------</p>
            </form>
          ))
        ) : (
          <p>No capstones available</p>
        )}
      </div>
      <div>
        <form onSubmit={handleCreateCapstone}>
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
          <button type="submit">Add Capstone</button>
        </form>
      </div>
    </div>
  );
}
