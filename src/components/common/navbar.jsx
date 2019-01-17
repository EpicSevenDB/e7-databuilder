import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav, NavLink, Button } from "reactstrap";

//Icons
import { faUser, faAddressBook, faBolt, faPaw, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

library.add(faUser, faAddressBook, faBolt, faPaw, faSun, faMoon);

//Stateless Functional Component. Note the props when wanting to use data from its parent
const NavBar = props => {
    return (
        <Nav className="global-nav" vertical pills>
            <NavLink>
                <img className="nav-thumbnail img" src="/img/icon.png" alt="arky" />
            </NavLink>
            {props.links.map(link => (
                <NavLink key={link.id} id={link.id} className={link.active ? "active" : ""} href={link.url}>
                    <FontAwesomeIcon icon={link.icon} />
                    <br />
                    {link.title}
                </NavLink>
            ))}
            <div className="bottom-menu">
                <Button
                    size="sm"
                    className={props.isDark ? "theme-toggle" : "theme-toggle active"}
                    onClick={props.toggleTheme}
                >
                    <FontAwesomeIcon icon="sun" />
                </Button>
                <Button
                    size="sm"
                    className={props.isDark ? "theme-toggle active" : "theme-toggle"}
                    onClick={props.toggleTheme}
                >
                    <FontAwesomeIcon icon="moon" />
                </Button>
            </div>
        </Nav>
    );
};

export default NavBar;
