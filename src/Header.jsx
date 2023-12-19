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
        <a href="#personal">Personal Information</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#capstone">Capstone</a>
      </nav>
    );
  }

  return <header>{navigationLinks}</header>;
}
