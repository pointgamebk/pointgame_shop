import { headerLogo } from "../assets/img";

const Nav = () => {
  return (
    <header>
      <nav>
        <a href="/">
          <img src={headerLogo} />
        </a>
      </nav>
    </header>
  );
};

export default Nav;
