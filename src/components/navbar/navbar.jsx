import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav, NavLink } from "reactstrap";

//Icons
import {
  faUser,
  faAddressBook,
  faBolt,
  faPaw
} from "@fortawesome/free-solid-svg-icons";

library.add(faUser, faAddressBook, faBolt, faPaw);

//Stateless Functional Component. Note the props when wanting to use data from its parent
const NavBar = props => {
  return (
    <Nav className="global-nav" vertical pills>
      {props.links.map(link => (
        <NavLink
          key={link.id}
          id={link.id}
          className={link.active ? "active" : ""}
          href={link.url}
        >
          <FontAwesomeIcon icon={link.icon} />
          <br />
          {link.title}
        </NavLink>
      ))}
    </Nav>
  );
};

export default NavBar;
