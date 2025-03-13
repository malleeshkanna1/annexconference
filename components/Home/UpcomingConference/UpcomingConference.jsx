"use client";
import React, { useState } from "react";
import UpcomingConferenceStyle from "./UpcomingConference.module.css";
import Slider from "react-slick";
import Link from "next/link";

const UpcomingConference = () => {
  const categories = [
    "ALL",
    "ENT",
    "DIABETES",
    "HEALTHCARE",
    "NUTRITION",
    "NEUROSCIENCE",
    "GYNECOLOGY",
    "DERMATOLOGY",
    "SURGERY",
    "ORTHOPEDICS",
    "CARDIOLOGY",
    "NURSING",
    "CANCER",
  ];

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

  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <div className={`p-4 ${UpcomingConferenceStyle.container}`}>
      <h3 className="text-uppercase text-center mt-5">
        Select the upcoming events categorized
      </h3>
      <div className="mt-5">
        <div className={UpcomingConferenceStyle["honeycomb-container"]}>
          {categories.map((el) => (
            <div
              key={el}
              className={`${UpcomingConferenceStyle["honeycomb-tab"]} ${
                activeTab === el ? UpcomingConferenceStyle.active : ""
              }`}
              onClick={() => setActiveTab(el)}
            >
              {el}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 container-fluid">
        <Slider {...settings}>
          <div>
            <div className="container">
              <div className="row">
                {[0, 0, 0, 0, 0, 0].map((el,i) => (
                  <div className="col-md-6 col-lg-4 mb-3" key={i}>
                    <div
                      className={
                        UpcomingConferenceStyle["upcoming-events-card"]
                      }
                    >
                      <span className={UpcomingConferenceStyle["date"]}>
                        17 Mar 2026
                      </span>
                      <img
                        src="/images/home/upcoming-conference-demo.webp"
                        alt="Event Image"
                      />
                      <div className={UpcomingConferenceStyle["content"]}>
                        <div>Pediatrics & Neonatology</div>
                        <div className={UpcomingConferenceStyle["location"]}>
                          Dubai, UAE
                        </div>
                      </div>
                      <Link href={'/conference/primary-healthcare-pain-management-and-functional-structure'} className={UpcomingConferenceStyle["buy-button"]}>
                        BUY TICKETS
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div></div>
        </Slider>
      </div>
      <div className="mt-5 mb-4 d-flex align-items-center justify-content-center">
        <button className="brand-btn d-flex align-items-center">
          View More &nbsp;{" "}
          <i className="pi-angle-double-right text-white pi"></i>{" "}
        </button>
      </div>
    </div>
  );
};

export default UpcomingConference;
