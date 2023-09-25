import { TfiAlignJustify } from "react-icons/tfi";

function NavBarButton({ setNavOpen, navOpen }) {
  function handleClick() {
    setNavOpen(!navOpen);
  }

  return (
    <div>
      <span
        className={`navigation-menu ${navOpen ? "active" : ""}`}
        onClick={handleClick}
        id={navOpen ? "active" : ""}
      >
        <TfiAlignJustify />
      </span>
    </div>
  );
}

export default NavBarButton;
