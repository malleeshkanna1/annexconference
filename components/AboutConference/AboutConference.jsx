import React from "react";
import ConferenceDetails from "./ConferenceDetails/ConferenceDetails";
import WelcomeContent from "./WelcomeContent/WelcomeContent";
import AboutMission from "./AboutMission/AboutMission";
import ConnectWithOthers from "../Home/ConnectWithOthers/ConnectWithOthers";
import EnquiryForm from "../Home/EnquiryForm/EnquiryForm";
import OrganizingCommitee from "./OrganizingCommitee/OrganizingCommitee";
import ReputedOrganizations from "../Home/ReputedOrganizations/ReputedOrganizations";
import AlumniSpeakers from "../Home/AlumniSpeakers/AlumniSpeakers";

const AboutConference = () => {
  return (
    <>
      <ConferenceDetails />
      <WelcomeContent />
      <AboutMission/>
      <OrganizingCommitee/>
      <ReputedOrganizations/>
      <AlumniSpeakers/>
      <ConnectWithOthers/>
      <EnquiryForm/>
    </>
  );
};

export default AboutConference;
