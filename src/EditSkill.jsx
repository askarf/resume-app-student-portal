/* eslint-disable react/prop-types */
import { useEffect } from "react";
import axios from "axios";

export function EditSkill(props) {
  useEffect(() => {
    props.onShowStudent(props.studentId);
  }, []);

  const handleEditSkill = (id, event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.patch(`http://localhost:3000/skills/${id}.json`, params).then((response) => {
      console.log(response.data);
      console.log(params);
      window.location.reload();
    });
  };
  const handleDeleteSkill = (id) => {
    axios.delete(`http://localhost:3000/skills/${id}.json`).then((response) => {
      console.log(response.data);
      window.location.reload();
    });
  };
  const handleAddSkill = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.post(`http://localhost:3000/skills.json`, params).then((response) => {
      console.log(response.data);
      console.log(params);
      window.location.reload();
    });
  };

  return (
    <div>
      <h1>My Skills</h1>
      <div>
        <form onSubmit={handleAddSkill}>
          <div>
            Skill: <input type="text" name="skill_name" />
          </div>
          <button type="submit">Add</button>
        </form>
      </div>
      <div>
        {props.student.skills && props.student.skills.length > 0 ? (
          props.student.skills.map((skill) => (
            <form key={skill.id} onSubmit={(event) => handleEditSkill(skill.id, event)}>
              <div>
                Skill Name: <input defaultValue={skill.skill_name} name="skill_name" type="text" />
              </div>

              <button type="submit">Update Skill</button>
              <button onClick={() => handleDeleteSkill(skill.id)}>Delete Skill</button>
              <p>-------</p>
            </form>
          ))
        ) : (
          <p>No skills available</p>
        )}
      </div>
    </div>
  );
}
