/* eslint-disable react/prop-types */
export function EditExperience(props) {
  return (
    <div>
      <h1>Experience</h1>
      <div>
        {props.students[0].experience.map((experience) => (
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
              Company Name: <input defaultValue={experience.company} name="company" type="text" />
            </div>
            <div>
              Details: <input defaultValue={experience.details} name="details" type="text" />
            </div>
          </form>
        ))}
        <button>Update Info</button>
      </div>
    </div>
  );
}
