import React, { Component } from "react";
import Link from "next/link";
import SvgLoader from 'bv-react-svgloader'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const links = [
  // { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

class NavBar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <Navbar color="transparent" light expand="md">
        <NavbarBrand href="/"><SvgLoader src='/static/images/logo.svg' className="svg-logo"/></NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link prefetch href="/">
                <NavLink>Home</NavLink>
              </Link>
            </NavItem>
            {links.map(({ key, href, label }) => (
              <NavItem key={key}>
                <Link href={href}>
                  <NavLink>{label}</NavLink>
                </Link>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
        {/* <style jsx>{`
              :global(body) {
              margin: 0;
              font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
              Helvetica, sans-serif;
            }
            nav {
            text-align: center;
          }
          ul {
          display: flex;
          justify-content: space-between;
        }
        nav > ul {
        padding: 4px 16px;
      }
      li {
      display: flex;
      padding: 6px 8px;
      }
      a {
      color: #067df7;
      text-decoration: none;
      font-size: 13px;
      }
      `}</style> */}
      </Navbar>
    );
  }
}

export default NavBar;
