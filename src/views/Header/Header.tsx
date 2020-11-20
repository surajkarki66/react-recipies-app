import React from "react";

import Logo from "../../assets/img/logo.png";

const Header: React.FC = () => {
  return (
    <>
      <header className="d-flex justify-content-center align-items-start">
        <img src={Logo} alt="Recipe-App" className="logo" />
        <div className="title  d-none d-lg-block">RecipiesApp</div>
        {/* SearchForm */}

        <a className="text-success ml-3 mt-2" href="/" title="Star on GitHub">
          <i className="fab fa-github" />
        </a>
      </header>
    </>
  );
};

export { Header };

export default Header;
