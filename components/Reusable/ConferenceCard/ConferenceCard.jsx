import React from "react";
import ConferenceCardStyle from "./ConferenceCard.module.css";
import Link from "next/link";

const ConferenceCard = ({
  image,
  date,
  location,
  heading,
  desc,
  buylink,
  slug,
}) => {
  return (
    <div className={ConferenceCardStyle["container"]}>
      <div className={ConferenceCardStyle["image-section"]}>
        <img src={image} alt={heading} />
        <div className={ConferenceCardStyle["overlay"]}>
          {date} &nbsp;&nbsp; | &nbsp;&nbsp; {location}
        </div>
      </div>
      <div className={ConferenceCardStyle["content"]}>
        <h2>{heading}</h2>
        <p>{desc}</p>
        <Link
          href={"/conference/" + slug}
          className={ConferenceCardStyle["btn"]}
        >
          BUY TICKETS
        </Link>
      </div>
    </div>
  );
};

export default ConferenceCard;
