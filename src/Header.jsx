export function Header() {
  let navigationLinks;
  if (localStorage.jwt === undefined) {
    navigationLinks = (
      <nav>
        <a>Student Portal</a>
      </nav>
    );
  } else {
    navigationLinks = (
      <nav>
        <a>Student Portal</a>
        <a>Personal Information</a>
        <a>Experience</a>
        <a>Education</a>
        <a>Skills</a>
        <a>Capstone</a>
      </nav>
    );
  }

  return <header>{navigationLinks}</header>;
}
