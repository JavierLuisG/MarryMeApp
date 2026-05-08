import React, { useState } from "react";
import { useParams } from "react-router-dom";
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
import ArregloLinea from "../components/ArregloLinea";
import EnvelopeIntro from "../components/EnvelopeIntro";
import config from "../mocks/config.json";

export const Home = () => {
  const [envelopeDone, setEnvelopeDone] = useState(false);
  const { name } = useParams();

  const isInvited = name
    ? config.invitados.some(
        (n) => n.toLowerCase().trim() === name.toLowerCase().trim()
      )
    : false;

  return (
    <div className="container_bottom box">
      <EnvelopeIntro onDone={() => setEnvelopeDone(true)} />
      <BgMusic
        src={"/audio/AndresCepeda_PorElRestoDeMiVida.mp3"}
        volume={0.5}
        autoPlay={envelopeDone}
      />
      <div className="container_home flex_column">
        {/* <GuestPresentation /> */}
        <Head />
        <Arreglo />
        <OurLove />
        <TimeRealize />
        <Places showReception={isInvited} />
        {isInvited && (
          <>
            <Arreglo />
            <ConfirmAttendance />
            <ArregloLinea />
            <SectionDetail />
            <Gifts />
          </>
        )}
        <Footer />
      </div>
    </div>
  );
};
