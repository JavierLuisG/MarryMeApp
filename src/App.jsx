import { Route, Routes } from "react-router-dom";
import { routes } from "./utils/routes";
import { Home } from "./routes/Home";
import NotFound from "./routes/NotFound";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      // Settings that can be overridden on per-element basis, by data-aos-* attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 700, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-center", // defines which position of the element regarding to window should trigger the animation
    });

    // Refresca AOS si hay cambios en el DOM dinámico
    AOS.refresh();
  }, []);

  return (
    <>
      <Routes>
        <Route path={`${routes.home}`} element={<Home />} />
        <Route path={`${routes.home}/:name`} element={<Home />} />
        <Route path={`${routes.notFound}`} element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
