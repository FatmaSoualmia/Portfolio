import { NavLink } from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      <h1>Page not found</h1>
      <p>
        to go to the home page press <NavLink to="/">here</NavLink>
      </p>
    </div>
  );
}

export default ErrorPage;
