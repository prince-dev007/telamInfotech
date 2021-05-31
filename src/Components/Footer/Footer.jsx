import React from "react";

function Footer() {
  return (
    <div>
      <div className="container-fluid" id="footer">
        <div className="container">
          <div className="row p-lg-2">
            <div className="col-lg-4 p-lg-3">
              <h2>telamInfotech</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
                similique maiores officia natus.
              </p>
              <div class="socialLinks">
                <h4>Follow Us on</h4>
                <ul class="w-75 p-0">
                  <li whileHover={{ scaleX: 1.1 }}>
                    <a href="#Start">
                      <i class="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li whileHover={{ scaleX: 1.1 }}>
                    <a href="#Start">
                      <i class="bx bxl-linkedin"></i>
                    </a>
                  </li>
                  <li whileHover={{ scaleX: 1.1 }}>
                    <a href="#Start">
                      <i class="bx bxl-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <p>&copy; Copyright All rights reserved</p>
            </div>
            <div className="col-lg-4 p-lg-3">
                <h2>Our Services</h2>
                <ul class="mt-4">
                    <li><i class='bx bxs-tag-alt' ></i> Web Development</li>
                    <li><i class='bx bxs-tag-alt' ></i> App Development</li>
                    <li><i class='bx bxs-tag-alt' ></i> Cross Platform Development</li>
                    <li><i class='bx bxs-tag-alt' ></i> UI / UX Design</li>
                    </ul>
            </div>
            <div className="col-lg-4 p-lg-3">
                <h2>Quick Links</h2>
                <ul class="mt-4">
                <li><i class='bx bxs-tag-alt' ></i> Home</li>
                    <li><i class='bx bxs-tag-alt' ></i> About Us</li>
                    <li><i class='bx bxs-tag-alt' ></i> Services</li>
                    <li><i class='bx bxs-tag-alt' ></i> Contact Us</li>
                  
                    </ul>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
export default Footer;
