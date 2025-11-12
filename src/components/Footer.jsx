import React from "react";
import twitter from "../assets/twitter.png";
import instagram from "../assets/Instagram.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import youtube from "../assets/youtube.png";
import logo from "../assets/fir-col-icon.png";

const Footer = () => {
  return (
    <div className="main-footer-section mx-auto max-w-[1500px] w-[90%] pt-10">
      <div className="footer-section flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap justify-between border-b-2 border-[#AABDB4] p-4 pb-9 gap-8">
        
        {/* First Column */}
        <div className="fir-col-p flex flex-col gap-4 items-center sm:w-1/2 md:w-1/4">
          <div className="fir-col-c px-5 py-5 bg-blue-300 rounded-xl">
            <img
              src={logo}
              alt="first-col-icon"
              className="w-[200px] sm:w-[242px] h-[58px] md:h-[20px] lg:h-[30px] xl:h-[40px]"
            />
          </div>

          <div className="fir-col-icon-div flex gap-4 flex-wrap justify-center xl:gap-7">
            <img src={twitter} alt="twitter-icon" className="w-6 h-6" />
            <img src={instagram} alt="instagram-icon" className="w-6 h-6" />
            <img src={facebook} alt="facebook-icon" className="w-6 h-6" />
            <img src={linkedin} alt="linkedin-icon" className="w-6 h-6" />
            <img src={youtube} alt="youtube-icon" className="w-6 h-6" />
          </div>
        </div>

        {/* Second Column */}
        <div className="secound-col flex flex-col gap-2.5 sm:w-1/2 md:w-1/4 text-center sm:text-left">
          <p className="text-[#0F172A] font-semibold leading-6 pb-3">Services</p>
          {["Web Design", "Web App Development", "Digital Marketing", "E-commerce", "Maintainance & Support", "Pricing"].map(
            (service, i) => (
              <p key={i} className="text-[#657790] text-[12px]">
                {service}
              </p>
            )
          )}
        </div>

        {/* Third Column */}
        <div className="third-col flex flex-col gap-2.5 sm:w-1/2 md:w-1/4 text-center sm:text-left">
          <p className="text-[#0F172A] font-semibold leading-6 pb-3">
            Technologies
          </p>
          {[
            "Magento Development",
            "Python Development",
            "Woocommerce Development",
            "Shopify Development",
            "Bigcommerce Development",
            "Node.js Development",
          ].map((tech, i) => (
            <p key={i} className="text-[#657790] text-[12px]">
              {tech}
            </p>
          ))}
        </div>

        {/* Fourth Column */}
        <div className="fourth-col flex flex-col gap-6 sm:w-1/2 md:w-1/4 text-center sm:text-left">
          <div className="fourth-top flex flex-col gap-2.5">
            <p className="text-[#0F172A] font-semibold leading-6 pb-3">
              Subscribe to newsletter
            </p>
            <p className="text-[#657790] text-[12px] max-w-[251px] mx-auto sm:mx-0">
              Lorem ipsum dolor sit amet, consec tetur adip iscing elit. Sit quis
              auctor.
            </p>
          </div>

          <div className="fourth-bottom flex flex-col sm:flex-row justify-center sm:justify-start md:flex-col 2xl:flex-row gap-3">
            <input
              type="text"
              placeholder="Enter email address"
              className="border border-[#ccc] px-3 py-3 rounded-[8px] w-full sm:w-auto"
            />
            <button className="px-7 py-3 bg-blue-300 rounded-md text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom-section pt-5 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-3">
        <div className="footer-right-side text-[#0F172A]">
          <p className="text-[14px] leading-6">
            © Copyright 2025, All Rights Reserved by Magebyte
          </p>
        </div>

        <div className="footer-left-side text-[#1E2131] flex gap-6">
          <span className="text-[14px]">Terms</span>
          <span className="text-[14px]">Privacy</span>
          <span className="text-[14px]">Security</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
