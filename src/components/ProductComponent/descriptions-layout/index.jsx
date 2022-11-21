import "./index.scss";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function DescriptionLayout({ title, children }) {
  const [containerIsOpen, setContainerIsOpen] = useState(true);

  return (
    <div className="description-layout-container">
      <div className="description-layout-title">
        <IoIosArrowDown
          onClick={() => setContainerIsOpen((prevState) => !prevState)}
          className={`description-layout-arrow ${
            containerIsOpen ? "active" : "disactive"
          }`}
        />
        <h5>{title}</h5>
      </div>
      {containerIsOpen && <div>{children}</div>}
    </div>
  );
}

export default DescriptionLayout;
