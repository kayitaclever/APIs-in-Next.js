import React from "react";

const Navbar = () => {
  return (
    <div className="navbar-lg py-8 bg-black">
      <nav className="navbar">
        <div className="container-fluid">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="movie text-4xl text-white ml-10">
                M<span className="text-yellow-500 ">oo</span>vie
              </h1>
            </div>
            <div className="flex items-center">
              <input className="search px-20  rounded-full border border-white text-white bg-black text-lg focus:outline-none focus:ring focus:border-white-100" type="text" placeholder="Search" />
            </div>
            <div className="flex items-center">
              <ul className="navbar-nav flex items-center gap-8 ml-10">
                <li className="nav-item">
                  <a className="nav-link text-white text-2xl" href="">
                    Movie Magic
                  </a>
                </li>
  
                
              
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
