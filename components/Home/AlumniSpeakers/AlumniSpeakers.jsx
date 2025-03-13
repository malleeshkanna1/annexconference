"use client";
import React from "react";
import AlumniSpeakerStyles from "./AlumniSpeakers.module.css";
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

const AlumniSpeakers = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="col-xl-3 col-lg-4 col-md-6 ">
          <div className={AlumniSpeakerStyles["header"]}>MEET OUR SPEAKERS</div>
        </div>

        <div className="mt-4">
          <h3 className="fw-bold">Esteemed Alumni Speakers</h3>
        </div>
      </div>

      <div className=" p-5 container-fluid">
        <Slider {...settings}>
          <div>
            <div className="container">
              <div className="row">
                {[0, 0, 0, 0, 0, 0,0,0].map((el, i) => (
                  <div className="col-md-6 col-lg-4 col-xl-3 mb-3" key={i}>
                    <div className={AlumniSpeakerStyles["card"]}>
                      <div className={AlumniSpeakerStyles["card-header"]}>
                        <img
                          src="https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-PNG-Photos.png"
                          alt="Profile"
                          className={AlumniSpeakerStyles["profile-img"]}
                        />
                        <div className={AlumniSpeakerStyles["mic-icon"]}>
                          <img src="/icons/mic.png" alt="Mic" />
                        </div>
                      </div>
                      <div className={AlumniSpeakerStyles["card-body"]}>
                        <div className={AlumniSpeakerStyles["name"]}>
                          Alex Micol
                        </div>
                        <div className={AlumniSpeakerStyles["designation"]}>
                          Founder & CEO, Scalers
                        </div>
                        <div className={AlumniSpeakerStyles["company"]}>
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

export default AlumniSpeakers;
