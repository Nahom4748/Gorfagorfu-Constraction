import React from "react";

import logo from "../../assets/images/logo-light.png";

function Header() {
  return (
    <div>
      <div id="bg">
        <div class="page-wraper">
          <header class="site-header header-style-3 mobile-sider-drawer-menu">
            <div class="sticky-header main-bar-wraper">
              <div class="main-bar site-bg-primary">
                <div class="container">
                  <div class="logo-header mostion">
                    <a href="/">
                      <img src={logo} width="171" height="49" alt="" />
                    </a>
                  </div>

                  <div class="header-nav navbar-collapse collapse ">
                    <ul class="nav">
                      <li>
                        <a href="#">Home</a>
                      </li>

                      <li>
                        <a href="#">About Us</a>
                      </li>

                      <li>
                        <a href="#">Service</a>
                      </li>

                      <li>
                        <a href="#">Projects</a>
                      </li>

                      <li class="">
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
}

export default Header;
