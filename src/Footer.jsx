import { LogoutLink } from "./LogoutLink";

export function Footer() {
  let footerLinks;
  if (localStorage.jwt === undefined) {
    footerLinks = (
      <nav>
        <p>Copyright 2023</p>
      </nav>
    );
  } else {
    footerLinks = (
      <nav>
        <LogoutLink />
        <p>Copyright 2023</p>
      </nav>
    );
  }
  return <div>{footerLinks}</div>;
}
