import { motion, AnimatePresence } from 'framer-motion';
import canBase from '../assets/can.png';
import './AnimatedCan.css';

// Config da animação deslizante
const variants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 1
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 1
  })
};

const AnimatedCan = ({ currentFlavor, direction }) => {
  return (
    <div className="can-wrapper">
      
      {/* CAMADA 1: Base */}
      <img src={canBase} alt="Can Base" className="can-layer-base" />

      {/* CAMADA 2: Rótulos com Máscara e Animação */}
      <div className="labels-mask-container">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentFlavor.id} 
            src={currentFlavor.label}
            className="sliding-label"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
          />
        </AnimatePresence>
      </div>

      {/* CAMADA 3: Overlay */}
      <img src={canBase} alt="Can Overlay" className="can-layer-overlay" />

    </div>
  );
};

export default AnimatedCan;