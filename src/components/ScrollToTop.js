import { useState, useEffect } from "react";
import { TfiAngleUp } from "react-icons/tfi";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 320) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  return (
    isVisible && (
      <span className="back-to-home" onClick={scrollToTop}>
        <TfiAngleUp />
      </span>
    )
  );
}

export default ScrollToTopButton;
