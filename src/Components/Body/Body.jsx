import React from "react";
import Header from "../Header/Header";
import "./Body.css";
import {motion} from 'framer-motion';
function Body() {
  return (
    <div>
      <Header />
      <div class="container-fluid" id="section1">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <motion.h1 whileHover={{scaleX:1.1}}>telamInfotech</motion.h1>
              <motion.h3 whileHover={{scaleX:1.1}}>You Plan We Design</motion.h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi mollitia facere aperiam ratione deserunt sit. Odit sint
                exercitationem beatae, optio veritatis fugiat asperiores in quod
                ipsum, vitae aspernatur placeat repellendus?
              </p>
              <div class="socialLinks">
                <h4>Follow Us on</h4>
                <ul class="w-75 p-0">
                  <motion.li whileHover={{scaleX:1.1}}>
                    <a href="#Start">
                      <i class="bx bxl-facebook"></i>
                    </a>
                  </motion.li>
                  <motion.li whileHover={{scaleX:1.1}}>
                    <a href="#Start">
                      <i class="bx bxl-linkedin"></i>
                    </a>
                  </motion.li>
                  <motion.li whileHover={{scaleX:1.1}}>
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
            <motion.h2 whileHover={{scaleX:1.1}}>
              You Plan We <span>Design</span>
            </motion.h2>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Body;
