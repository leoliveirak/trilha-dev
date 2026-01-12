import { useState } from 'react';
import { IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import './Hero.css';

import AnimatedCan from '../components/AnimatedCan';

// Assets
import labelWatermelon from '../assets/label-watermellon.png';
import labelGrape from '../assets/label-grape.png';
import labelOrange from '../assets/label-orange.png';

const flavors = [
  { id: 'watermelon', label: labelWatermelon },
  { id: 'grape', label: labelGrape },
  { id: 'orange', label: labelOrange }
];

const Hero = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const flavorIndex = Math.abs(page % flavors.length);
  const currentFlavor = flavors[flavorIndex];

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="hero-container">
      
      <AnimatedCan currentFlavor={currentFlavor} direction={direction} />

      {/* Navegação */}
      <div className="nav-buttons">
        <IconButton onClick={() => paginate(-1)} color="primary">
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton onClick={() => paginate(1)} color="primary">
          <ArrowForwardIosIcon />
        </IconButton>
      </div>

    </div>
  );
};

export default Hero;