import { Link } from "react-scroll";
import cvavatar from "../assets/cvavatar.jpg";
import { useState, useEffect } from "react";

function SideBar({ isVisible }) {
  const SideBarData = [
    { id: 1, title: "HOME", link: "/" },
    { id: 2, title: "ABOUT", link: "/about" },
    { id: 3, title: "RESUME", link: "/resume" },
    { id: 4, title: "SERVICE", link: "/service" },
    { id: 5, title: "PORTFOLIO", link: "/portfolio" },
    { id: 6, title: "TESTIMONIALS", link: "/testimonials" },
    { id: 7, title: "BLOG", link: "/blog" },
    { id: 8, title: "CONTACT", link: "/contact" },
  ];
  const [path, setPath] = useState("/");
  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <div className={`sidebar ${isVisible ? "visible" : ""}`}>
      <div className="avatar-section">
        <span className="avatar-picture">
          <img className="custum-img" src={cvavatar} alt="avatar" />
        </span>
        <h3 className="avatar-name">
          <strong>Fatma Soualmia</strong>
        </h3>
        <p className="avatar-description">Engineering Student</p>
      </div>
      <ul className="list">
        {SideBarData.map((value) => (
          <li
            className="item"
            key={value.id}
            id={path === value.link ? "active" : ""}
          >
            <Link
              to={value.title}
              smooth={true}
              onClick={() => {
                setPath(value.link);
              }}
            >
              {value.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
