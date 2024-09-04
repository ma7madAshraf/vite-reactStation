import { Link } from "react-router-dom";

const BreadCrumbs = ({ links }) => {
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {links.map((link) => {
          return (
            <li key={link}>
              <Link to={`/${link}`} className="capitalize">
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BreadCrumbs;
