export function EditEducation(props) {
  return (
    <div>
      <h1>Edit education</h1>
      <div>
        {props.students[0].education.map((education) => (
          <form key={education.id}>
            <div>
              University: <input defaultValue={education.university} name="university" type="text" />
            </div>
            <div>
              Degree: <input defaultValue={education.degree} name="degree" type="text" />
            </div>
            <div>
              Start Date: <input defaultValue={education.start_date} name="start_date" type="text" />
            </div>
            <div>
              End Date: <input defaultValue={education.end_date} name="end_date" type="text" />
            </div>
          </form>
        ))}
      </div>
      <button>Update Button: </button>
    </div>
  );
}
