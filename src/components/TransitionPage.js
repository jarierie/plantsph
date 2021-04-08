import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Page = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background-color: grey;
`;

const TransitionPage = () => {
  return (
    <Page
      animate={{
        opacity: 0,
        borderRadius: "50%",
        transitionEnd: {
          display: "none",
        },
      }}
      transition={{
        delay: 0.1,
        duration: 1,
        ease: "linear",
      }}
    />
  );
};

export default TransitionPage;
