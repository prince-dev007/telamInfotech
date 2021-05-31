import React from "react";
import Header from "../Header/Header";
import "./Body.css";
import { motion } from "framer-motion";
import Slider from "../Slider/Slider";
import Footer from "../Footer/Footer"
function Body() {
  return (
    <div>
      <Header />
      
      <div class="container-fluid" id="section1">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <motion.h1 whileHover={{ scaleX: 1.1 }}>telamInfotech</motion.h1>
              <motion.h3 whileHover={{ scaleX: 1.1 }}>
                You Plan We Design
              </motion.h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi mollitia facere aperiam ratione deserunt sit. Odit sint
                exercitationem beatae, optio veritatis fugiat asperiores in quod
                ipsum, vitae aspernatur placeat repellendus?
              </p>
              <div class="socialLinks">
                <h4>Follow Us on</h4>
                <ul class="w-75 p-0">
                  <motion.li whileHover={{ scaleX: 1.1 }}>
                    <a href="#Start">
                      <i class="bx bxl-facebook"></i>
                    </a>
                  </motion.li>
                  <motion.li whileHover={{ scaleX: 1.1 }}>
                    <a href="#Start">
                      <i class="bx bxl-linkedin"></i>
                    </a>
                  </motion.li>
                  <motion.li whileHover={{ scaleX: 1.1 }}>
                    <a href="#Start">
                      <i class="bx bxl-instagram"></i>
                    </a>
                  </motion.li>
                </ul>
              </div>
              <h6>&copy; Copyright All Rights Are Reserved</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid" id="section2">
        <div className="row">
          <div className="col-lg-6 backup"></div>
          <div className="col-lg-6 p-lg-5 newBack">
            <h1>
              What is <span>telamInfotech..?</span>
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet,
              doloribus sed. Numquam in porro placeat quia quos culpa impedit
              labore? Nihil praesentium mollitia deserunt, soluta alias facilis
              esse qui illo.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              consectetur, animi nesciunt obcaecati quos placeat! Earum debitis
              sunt illo repellat temporibus, accusamus inventore! Voluptate
              tempore voluptas repellat! Accusantium, perspiciatis? Harum?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum,
              sunt recusandae perferendis facilis possimus fugiat quibusdam
              maxime cum laudantium, itaque adipisci, magnam omnis deserunt
              voluptas dolore totam dignissimos deleniti delectus.
            </p>
            <motion.h2 whileHover={{ scaleX: 1.1 }}>
              You Plan We <span>Design</span>
            </motion.h2>
          </div>
        </div>
      </div>
      <div className="container-fluid pb-5" id="section3">
        <div className="container pb-5">
          <h1>
            Our <span>Working</span> Process
          </h1>
          <div className="row mt-5">
            <div className="col-lg-4 col-12">
              <motion.div
                whileHover={{ scale: 0.8 }}
                className="process1 shadow"
              >
                <i class="bx bxs-tag-alt"></i>
                <h2>Booking Online</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  praesentium vitae recusandae beatae distinctio.
                </p>
              </motion.div>
            </div>
            <div className="col-lg-4 col-12">
              <motion.div
                whileHover={{ scale: 0.85 }}
                className="process1 shadow"
              >
                <i class="bx bxs-tag-alt"></i>
                <h2>Booking Online</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  praesentium vitae recusandae beatae distinctio.
                </p>
              </motion.div>
            </div>

            <div className="col-lg-4 col-12">
              <motion.div
                whileHover={{ scale: 0.9 }}
                className="process1 shadow"
              >
                <i class="bx bxs-tag-alt"></i>
                <h2>Booking Online</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  praesentium vitae recusandae beatae distinctio.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container-fluid" id="section4">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 ">
              <div className="GrowBox shadow-lg">
                <h2>Want to GROW...?</h2>
                <h1>Come with Us</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores maiores vitae omnis rem officia? Error adipisci
                  quisquam, cupiditate cum voluptas non aliquid delectus odit
                  vitae magni laborum iure totam est.
                </p>
                <motion.button whileHover={{ scaleX: 1.1 }} className="btn">
                  Get in Touch
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Slider/>
      <div className="container-fluid" id="section6">
        <div className="row">
          <div className="col-lg-6"></div>
          <div className="col-lg-6 p-lg-5">
            <div className="content p-lg-5">
              <h1 class="mt-3">
                What we <span>offers</span>
              </h1>
              <div className="service1 mt-5">
                <h2>
                  <i class="bx bxs-tag-alt"></i> Web Development Services
                </h2>
              </div>
              <div className="service1">
                <h2>
                  <i class="bx bxs-tag-alt"></i> App Development Services
                </h2>
              </div>
              <div className="service1">
                <h2>
                  <i class="bx bxs-tag-alt"></i> Cross Platform App Development
                </h2>
              </div>
              <div className="service1">
                <h2>
                  <i class="bx bxs-tag-alt"></i> UI/UX Design
                </h2>
              </div>
              <div className="service1">
                <h2>
                  <i class="bx bxs-tag-alt"></i> Digital Marketing
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid p-lg-5" id="section7">
        <div className="container p-lg-5">
          <div className="row bg-white rounded shadow">
            <div className="col-lg-12 p-lg-5">
            <h1>Make An Appointment</h1>
                <form class="mt-3">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" className="form-control" placeholder="Full Name"/>
                    </div>
                    <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" className="form-control" placeholder="Email Address"/>
                    </div>
                    <div className="form-group">
                    <label>Contact Number</label>
                    <input type="number" className="form-control" placeholder="Contact Number" />
                    </div>
                    <div className="form-group">
                    <label>Category</label>
                    <select class="form-control">
                      <option selected>Choose Category</option>
                      <option>Web Development</option>
                      <option>App Development</option>
                      <option>UI/UX Design</option>
                      </select>
                    </div>
                    <div className="form-group">
                    <label>Message</label>
                    <textarea className="form-control"  rows="5"  placeholder="Message"></textarea>
                    </div>
                    <div className="form-group">
                   <button className="btn">Send Message</button>
                    </div>
                  </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid p-lg-4" id="section8">
          <h1>Free call to Appointment</h1>
          <button className="btn"><i class='bx bxs-phone' ></i> +91 8299526141</button>
        </div>
       <Footer/>
    </div>
  );
}
export default Body;
