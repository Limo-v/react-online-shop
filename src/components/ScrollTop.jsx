import React, { useState } from "react";

import { FaChevronUp } from "react-icons/fa";
function ScrollTop() {
  const [visible, setVisible] = useState(false);
  window.addEventListener("scroll", () => {
    window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
  });
  return (
    <div className="scrolltop">
      <div className={`${visible ? "scroll-block" : "scroll-none"}`}>
        <FaChevronUp />
      </div>
    </div>
  );
}

export default ScrollTop;
