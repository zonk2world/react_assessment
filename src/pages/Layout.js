import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>

        <a href="mailto: john.marandino88@gmail.com" className="nav-author">
          John Marandino
        </a>
      </nav>

      <div id="main">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
