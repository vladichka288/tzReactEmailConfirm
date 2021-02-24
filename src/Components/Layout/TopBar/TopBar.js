import React from "react";
import { navigationContainer, linksContainer } from "./style";
import NavigationItem from "./NavigationItem/NavigationItem";
import Logo from "./Logo/Logo";
export default function TopBar() {
  return (
    <nav className={navigationContainer}>
      <Logo />
      <ul className={linksContainer}>
        <NavigationItem link="/findPartner" label="Find partner" />
        <NavigationItem link="/blog" label="Blog" />
        <NavigationItem link="/login" label="Log in" />
        <NavigationItem link="/postPitch" label="Post a pitch" />
      </ul>
    </nav>
  );
}
