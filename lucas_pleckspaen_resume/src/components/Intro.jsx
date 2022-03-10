import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Me from '../../public/Images/profile-img.png';

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 65vw;
  height: 55vh;
  display: flex;

  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};

  z-index: 1;
`;
const SubBox = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 55vh;
  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: auto;
    max-height: 90%;
  }
`;

const Text = styled.div`
  font-size: calc(0.1em + 2vw);
  color: ${(props) => props.theme.body};
  padding: calc(0.1em + 2vw);
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.2rem + 2vw);
    font-weight: 300;
  }
  & > h3 {
    font-size: calc(0.3rem + 3vw);
    font-weight: 300;
  }
`;

const Intro = () => (
  <Box
    initial={{ height: 0 }}
    animate={{ height: '55vh' }}
    transition={{ type: 'spring', duration: 2, delay: 1 }}>
    <SubBox>
      <Text>
        <h1>IT Manager</h1>
        <h3>Lucas Pleckspaen</h3>
        <h6>Agile | Scrum | DevOps </h6>
      </Text>
    </SubBox>
    <SubBox>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}>
        <img className="pic" src={Me} alt="Lucas Pleckspaen Profile Pict" />
      </motion.div>
    </SubBox>
  </Box>
);

export default Intro;