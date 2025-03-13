"use client";
import React from "react";
import UpcomingConferencesStyle from "../UpcomingConferences/UpcomingConferences.module.css";
import Slider from "react-slick";
import { useRef } from "react";
import ConferenceCard from "./../../Reusable/ConferenceCard/ConferenceCard";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1024, // Tablets & small desktops
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true,
        variableWidth: true,
      },
    },
    {
      breakpoint: 768, // Tablets & large phones
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        variableWidth: true,
      },
    },
    {
      breakpoint: 600, // Mobile screens (disable adaptiveHeight & variableWidth)
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
        variableWidth: false,
      },
    },
    {
      breakpoint: 480, // Smaller mobile screens
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
        variableWidth: false,
      },
    },
  ],
};


const PastConferences = () => {
  const sliderRef = useRef(null);

  const conferenceData = {
    image:
      "https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk=",
    date: "MARCH 10/11/2025",
    location: "DUBAI, UAE",
    heading: "Primary Healthcare, Pain Management & Functional Structure",
    desc: `We have the pleasure of inviting you to the "Annual Congress on Obstetrics and Women's Health 2025," which will be held in Dubai, United Arab Emirates, from March 10-11, 2025. This conference aims to provide a forum for the sharing of concepts, expertise.`,
    buylink: "#",
  };

  return (
    <div className={`px-0 ${UpcomingConferencesStyle["container"]}`}>
     <div
          className={`pb-5 p-4 ${UpcomingConferencesStyle["upcoming-conferences"]}`}
        >
          <h4 className="text-center text-white">Past Conference</h4>
          <div className="mt-5 container-fluid">
            <Slider ref={sliderRef} {...settings}>
              {[0, 0, 0, 0].map((el, i) => (
                <div className="ms-3">
                  <ConferenceCard {...conferenceData} />
                </div>
              ))}
            </Slider>
            <div className="mt-3">
              <div className="d-flex justify-content-center align-items-center">
                <button
                  className={`brand-btn px-3 ${UpcomingConferencesStyle["btn-rounded"]}`}
                  onClick={() => sliderRef.current.slickPrev()}
                >
                  <i className="pi-angle-left pi"></i>
                </button>{" "}
                &nbsp;&nbsp;
                <button
                  className={`brand-btn px-3 ${UpcomingConferencesStyle["btn-rounded"]}`}
                  onClick={() => sliderRef.current.slickNext()}
                >
                  <i className="pi-angle-right pi"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default PastConferences;
