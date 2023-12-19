/* eslint-disable react/prop-types */
import { useEffect } from "react";
import axios from "axios";

export function EditStudent(props) {
  useEffect(() => {
    props.onShowStudent(props.studentId);
  }, []);

  const handleEditInfo = (id, event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.patch(`http://localhost:3000/students/${id}.json`, params).then((response) => {
      console.log(response.data);
      console.log(params);
      window.location.reload();
    });
  };

  return (
    <div>
      <h1>My Information</h1>
      <div>
        <form onSubmit={(event) => handleEditInfo(props.student.id, event)}>
          <div>
            First Name: <input defaultValue={props.student.first_name} name="first_name" type="text" />
          </div>
          <div>
            Last Name: <input defaultValue={props.student.last_name} name="last_name" type="text" />
          </div>
          <div>
            Email: <input defaultValue={props.student.email} name="email" type="text" />
          </div>
          <div>
            Phone Number: <input defaultValue={props.student.phone_number} name="phone_number" type="text" />
          </div>
          <div>
            Bio: <input defaultValue={props.student.short_bio} name="short_bio" type="text" />
          </div>
          <div>
            LinkedIn: <input defaultValue={props.student.linkedin_url} name="linkedin_url" type="text" />
          </div>
          <div>
            Twitter: <input defaultValue={props.student.twitter_handle} name="twitter_handle" type="text" />
          </div>
          <div>
            Bio: <input defaultValue={props.student.short_bio} name="short_bio" type="text" />
          </div>
          <div>
            Personal Website: <input defaultValue={props.student.personal_url} name="personal_url" type="text" />
          </div>
          <div>
            Resume: <input defaultValue={props.student.resume_url} name="resume_url" type="text" />
          </div>
          <div>
            GitHub: <input defaultValue={props.student.github_url} name="github_url" type="text" />
          </div>
          <div>
            Photo: <input defaultValue={props.student.photo} name="photo" type="text" />
          </div>
          <button type="submit">Update Info</button>
        </form>
      </div>
    </div>
  );
}
