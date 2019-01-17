import React, { Component } from "react";
import { Nav, NavItem } from "reactstrap";
import HeroReset from "../hero/hero-reset";

class TopNavBar extends Component {
    state = {
        nav: [
            { label: "general", url: "general" },
            { label: "relations", url: "relations" },
            { label: "stats", url: "stats" },
            { label: "skills", url: "skills" },
            { label: "specialtySkill", url: "specialtySkill" },
            { label: "memoryImprint", url: "memoryImprint" },
            { label: "awakening", url: "awakening" }
        ]
    };

    render() {
        const { children, title } = this.props;
        return (
            <React.Fragment>
                <div className="top-navbar">
                    <Nav className="main-container">
                        <NavItem>
                            <div>
                                <h1 className="title">{title}</h1>
                                <HeroReset
                                    isDark={this.props.isDark}
                                    onReset={this.props.onReset}
                                    alert={this.props.alert}
                                />
                            </div>
                        </NavItem>
                        {/* <NavItem>
            <div class="nav-wrapper">
              {this.state.nav.map(link => (
                <a href={"#" + link.url} className="btn link">
                  {link.label}
                </a>
              ))}
            </div>
          </NavItem> */}

                        <NavItem>
                            <div className="nav-wrapper">{children}</div>
                        </NavItem>
                    </Nav>
                </div>
            </React.Fragment>
        );
    }
}

export default TopNavBar;
