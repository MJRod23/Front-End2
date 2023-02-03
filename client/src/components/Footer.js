import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h3 className="text-white">About Us</h3>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus maximus, ipsum non feugiat tincidunt, ipsum quam
              scelerisque est, vitae faucibus ante lacus eget nunc.
            </p>
          </div>
          <div className="col-md-3">
            <h3 className="text-white">Links</h3>
            <ul className="list-unstyled">
              <li><Link className="text-muted" to="#">Home</Link></li>
              <li><Link className="text-muted" to="#">Services</Link></li>
              <li><Link className="text-muted" to="#">About</Link></li>
              <li><Link className="text-muted" to="#">Contact</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3 className="text-white">Follow Us</h3>
            <ul className="list-unstyled">
              <li><a className="text-muted" href="#">Twitter</a></li>
              <li><a className="text-muted" href="#">Facebook</a></li>
              <li><a className="text-muted" href="#">Instagram</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3 className="text-white">Contact Us</h3>
            <p className="text-muted">
              123 Main Street<br />
              Anytown, USA 12345<br />
              (123) 456-7890
            </p>
          </div>
        </div>
        <hr className="bg-light" />
        <p className="text-center text-white">
          Copyright &copy; {year} | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
