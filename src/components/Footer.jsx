import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-black text-light py-3">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
        <span className="small">
          © {new Date().getFullYear()} Asin A. All rights reserved.
        </span>
        <div className="small">
          <span className="me-3">📧 asinakku@gmail.com</span>
          <span>📞 7902260176</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
