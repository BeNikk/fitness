import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Subheading = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Gym", "Aerobics", "Yoga", "Zumba"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return <h2 className="text-6xl font-bold text-white" ref={typedRef}></h2>;
};

export default Subheading;
