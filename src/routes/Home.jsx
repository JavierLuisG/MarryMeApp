import React, { useState } from "react";
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
import EnvelopeIntro from "../components/EnvelopeIntro";

export const Home = () => {
  const [envelopeDone, setEnvelopeDone] = useState(false);

  return (
    <div className="container_bottom box">
      <EnvelopeIntro onDone={() => setEnvelopeDone(true)} />
      <BgMusic src={"/audio/EdSheeran-Perfect.mp3"} volume={0.5} autoPlay={envelopeDone} />
      <div className="container_home flex_column">
        <GuestPresentation />
        <Head />
        <Arreglo />
        <OurLove />
        <TimeRealize />
        <Places />
        <Arreglo />
        <ConfirmAttendance />
        <SectionDetail />
        <Gifts />
        <Footer />
      </div>
    </div>
  );
};
