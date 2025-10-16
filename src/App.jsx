import { useEffect } from "react";
import { Routes,Route } from "react-router";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import 'boxicons/css/boxicons.min.css'; //https://http://boxicons.com/icons
import Aos from 'aos'; // https://github.com/michalsnik/aos
import 'aos/dist/aos.css';

import Prism from "./components/bits/Prisim.jsx"; //Prism Background

export default function App({ className }) {

  useEffect(() => {
    // You can also pass an optional settings object
    // below listed default settings
    Aos.init({
      // Global settings:
      //- disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      //- initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      // - useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      // - disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      // - debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      // - throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      //- offset: 120, // offset (in px) from the original trigger point
      //- delay: 0, // values from 0 to 3000, with step 50ms
      // - duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease-out', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: true, // whether elements should animate out while scrolling past them
      // - anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
  })

  return (
    <>

    <div className="relative w-full h-svh overflow-hidden">
      {/* Prism background */}
      <Prism
        animationType="rotate"
        timeScale={0.5}
        height={3}
        baseWidth={5}
        scale={3}
        hueShift={0}
        colorFrequency={1}
        noise={0.5}
        glow={1}
        className="absolute inset-0 z-0"
      />

      {/* Page content */}
      <div className="absolute inset-0 z-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>

    </>
  );
}
