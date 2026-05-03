import React from "react";
import Head from "../components/Head";
import { TimeRealize } from "../components/TimeRealize";
import Places from "../components/Places";
import OurLove from "../components/OurLove";
import GuestPresentation from "../components/GuestPresentation";
import SectionDetail from "../components/SectionDetail";
import Gifts from "../components/Gifts";
import ConfirmAttendance from "../components/ConfirmAttendance";
import BgMusic from "../components/BgMusic";
import Footer from "../components/Footer";
import Arreglo from "../components/Arreglo";

export const Home = () => {
  return (
    <div className="container_bottom box">
      <BgMusic src={"/audio/EdSheeran-Perfect.mp3"} volume={0.5} />
      <div className="container_home flex_column">
        <GuestPresentation />
        <Head />
        <Arreglo />
        <OurLove />
        <TimeRealize />
        <Places />
        <Arreglo />
        <SectionDetail />
        <Gifts />
        <ConfirmAttendance />
        <Footer />
      </div>
    </div>
  );
};
