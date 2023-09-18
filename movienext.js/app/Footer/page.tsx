import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="footer-div">
            <h3 className="text-2xl font-semibold">Get Our App</h3>
            <h1 className="text-4xl font-bold">Moovie</h1>
          </div>

          <div className="footer-div">
            <h3 className="text-2xl font-semibold">Explore</h3>
            <ul className="mt-4 space-y-2">
              <li>Home</li>
              <li>My List</li>
              <li>About Us</li>
            </ul>
          </div>

          <div className="footer-div">
            <h3 className="text-2xl font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>

          <div className="footer-div">
            <h3 className="text-2xl font-semibold">Contact Us</h3>
            <ul className="mt-4 space-y-2">
              <li>Email: support@moovie.com</li>
              <li>Phone: +1 123-456-7890</li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-3xl">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-3xl">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-3xl">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="my-8 border-t border-white" />
        <p className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Moovie. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
