import "./styles.css";

import avatar from "./img/avatar.jpg";
import logo from "./img/logo.jpg";
import Header from "./components/Header.js";
import Navigation from "./components/Navigation.js";
import Link from "./components/Link.js";
import Logo from "./components/Logo.js";
import Avatar from "./components/Avatar.js";

export default function App() {
  return (
    <>
      <Header>
        <Logo />
        <Navigation>
          <Link link="#home">Home</Link>
          <Link link="#about">About</Link>
          <Link link="#impressum">Impressum</Link>
        </Navigation>
        <Avatar />
      </Header>
      <main>content goes here…</main>
    </>
  );
}
