import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const CursorStyle = styled(motion.div)`
  pointer-events: none;
  position: absolute;
  left: 0;
  top: 0;
  width: 0.36vw;
  height: 0.36vw;
  padding: 1.5vw;
  border-radius: 100%;
  background-color: transparent;
  border: 0.1vw solid var(--black);
  /* mix-blend-mode: difference; */
  z-index: 20;
  @media (hover: none) and (pointer: coarse), (max-width: 500px) {
    display: none;
  }
`;

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  useEffect(() => {
    const handlePosition = (e) => {
      setMousePosition({ x: e.pageX, y: e.pageY });
      if (e.target.tagName === "A") {
        setHover(true);
      } else {
        setHover(false);
      }
    };
    window.addEventListener("mousemove", handlePosition);
  }, []);
  return (
    <CursorStyle
      animate={{
        left: mousePosition.x,
        top: mousePosition.y,
        x: "-50%",
        y: "-50%",
        scale: hover ? 1 : 0.5,
        opacity: 1,
        border: "0.1vw solid #0f0e0e",
        backgroundColor: hover ? "lightgreen" : "transparent",
      }}
      transition={{ ease: "linear", duration: 0.15 }}
    />
  );
};

export default Cursor;
