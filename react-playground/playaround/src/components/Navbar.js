import Logo from "../images/logo.jpg";

export default function Navbar() {
  return (
    <>
      <nav className="navigation">
        <div id="logo">
        <img src={Logo} className="logo-image"/>
        </div>
        <div className="navigation-menu">
            <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/stakeholders">Stakeholders</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
