"use client";
import React from "react";
import OrganizingCommiteetyles from "./OrganizingCommitee.module.css";
import Slider from "react-slick";

const CustomArrow = ({ className, style, onClick, direction }) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "linear-gradient(45deg, #00004d, #0000a6)",
        borderTopLeftRadius: direction === "left" ? "20%" : "0",
        borderBottomLeftRadius: direction === "left" ? "20%" : "0",
        borderTopRightRadius: direction === "right" ? "20%" : "0",
        borderBottomRightRadius: direction === "right" ? "20%" : "0",
        width: "40px",
        height: "90px",
        zIndex: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      {direction === "left" ? (
        <i className="pi-angle-double-left text-white pi"></i>
      ) : (
        <i className="pi-angle-double-right text-white pi"></i>
      )}
    </div>
  );
};

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <CustomArrow direction="left" />,
  nextArrow: <CustomArrow direction="right" />,
};

const OrganizingCommitee = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="col-xl-4 col-lg-4 col-md-6 ">
          <div className={OrganizingCommiteetyles["header"]}>MEET OUR ORGANIZING COMMITTEE</div>
        </div>

        <div className="mt-4">
          <h3 className="fw-bold">Event Oversight Panel</h3>
        </div>
      </div>

      <div className=" p-5 container-fluid">
        <Slider {...settings}>
          <div>
            <div className="container">
              <div className="row">
                {[0, 0, 0, 0, 0, 0,0,0].map((el, i) => (
                  <div className="col-md-6 col-lg-4 col-xl-3 mb-3" key={i}>
                    <div className={OrganizingCommiteetyles["card"]}>
                      <div className={OrganizingCommiteetyles["card-header"]}>
                        <img
                          src="https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-PNG-Photos.png"
                          alt="Profile"
                          className={OrganizingCommiteetyles["profile-img"]}
                        />
                        <div className={OrganizingCommiteetyles["mic-icon"]}>
                          <img src="/icons/mic.png" alt="Mic" />
                        </div>
                      </div>
                      <div className={OrganizingCommiteetyles["card-body"]}>
                        <div className={OrganizingCommiteetyles["name"]}>
                          Alex Micol
                        </div>
                        <div className={OrganizingCommiteetyles["designation"]}>
                          Founder & CEO, Scalers
                        </div>
                        <div className={OrganizingCommiteetyles["company"]}>
                          <img src="/images/reputed-organizations/cipla.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div></div>
        </Slider>
      </div>
    </>
  );
};

export default OrganizingCommitee;
