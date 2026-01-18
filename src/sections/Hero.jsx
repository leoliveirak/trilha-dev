import { useState } from 'react';
import { IconButton, Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import { motion, AnimatePresence } from 'framer-motion';

import './Hero.css';

import AnimatedCan from '../components/AnimatedCan';

// Assets
import labelWatermelon from '../assets/label-watermellon.png';
import labelGrape from '../assets/label-grape.png';
import labelOrange from '../assets/label-orange.png';
import floatWatermellon from '../assets/floating-watermellon.png';
import floatGrape from '../assets/floating-grape.png';
import floatOrange from '../assets/floating-orange.png';

const flavors = [
  { 
    id: 'watermelon', 
    label: labelWatermelon,
    bgcolor: '#A2E15A',
    title: "Watermelon",
    floating: floatWatermellon,
    description: 'Refrescância explosiva com o doce natural da melancia. A energia que você precisa para dominar o seu dia.'
  },
  { 
    id: 'grape', 
    label: labelGrape,
    bgcolor: '#C1379C',
    title: "Grape",
    floating: floatGrape,
    description: "O sabor intenso da uva com um toque cítrico eletrizante. Foco total para seus momentos de alta performance."
  },
  { 
    id: 'orange', 
    label: labelOrange,
    bgcolor: '#F8BE21',
    title: "Orange",
    floating: floatOrange,
    description: "Cítrico, vibrante e cheio de vitamina C. O gás extra para seus treinos e aventuras ao ar livre"
  }
];

const Hero = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const flavorIndex = Math.abs(page % flavors.length);
  const currentFlavor = flavors[flavorIndex];

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div 
      className="hero-container" 
      id="hero"
      style={{ backgroundColor: currentFlavor.bgcolor }}
    >

      <AnimatePresence mode='wait'>
        <motion.img
          key={currentFlavor.id + '-float'}
          src={currentFlavor.floating}
          className="hero-bg-floating"
          initial={{ opacity: 0, rotate: 20, scale: 0.8 }}
          animate={{ opacity: 0.6, rotate: 0, scale: 1 }} // Opacidade 0.6 para não brigar com o texto
          exit={{ opacity: 0, rotate: -20, scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      <div className="hero-content">
        <div className="hero-text-area">
          <h1 className={`hero-title ${currentFlavor.id}`}>{currentFlavor.title}</h1>
          <p className='hero-description'>{currentFlavor.description}</p>
          <Button
            variant="contained"
            size="large"
            startIcon={<ShoppingBagIcon/>}
            sx={{
              backgroundColor: 'white',
              color: currentFlavor.bgcolor,
              fontWeight: 'bold',
              borderRadius: '50px',
              padding: '10px 30px',
              fontSize: '1rem',
              marginTop: '1rem',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                transform: 'scale(1.05)',
              },
            }}
          >
            Experimente agora
          </Button>
        </div>


        <div className='hero-can-area'>
          <AnimatedCan currentFlavor={currentFlavor} direction={direction} />
        </div>
      </div>

      {/* Navegação */}
      <div className="nav-buttons">
        <IconButton onClick={() => paginate(-1)} sx={{ color: 'white', border: '2px solid rgba(255,255,255,0.5)' }}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton onClick={() => paginate(1)} sx={{ color: 'white', border: '2px solid rgba(255,255,255,0.5)' }}>
          <ArrowForwardIosIcon />
        </IconButton>
      </div>

    </div>
  );
};

export default Hero;