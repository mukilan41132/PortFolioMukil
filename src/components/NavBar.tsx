import React from "react";
import "../styles/index.css";
const Navbar = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const navItems = [
    { id: 1, label: "Home" },
    { id: 2, label: "About" },
    { id: 3, label: "Skills" },
    { id: 4, label: "Experience" },
    { id: 5, label: "Projects" },
    { id: 6, label: "Contact Me" },
    //    { id: 7, label: "View Contact" }
  ];
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid z-index-99">
 
        <div className="navbar-collapse collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item tabs-controls__item">
                <div
                  className={`tabs-controls__link ${
                    activeTab === item.id ? "tabs-controls__link--active" : ""
                  }`}
                  data-id={item.id}
                  onClick={() => setActiveTab(item.id)}>
                  {item.label}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
