import { motion } from 'framer-motion';

import BoltIcon from '@mui/icons-material/Bolt';
import PsychologyIcon from '@mui/icons-material/Psychology';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

import './About.css';

const benefits = [
  {
    id: 1,
    icon: <BoltIcon fontSize="inherit" sx={{ color: '#FF9800' }} />,
    title: "Energia Pura",
    text: "Uma mistura potente de cafeína e taurina para manter seu nível de energia no topo por horas, sem o efeito rebote."
  },
  {
    id: 2,
    icon: <PsychologyIcon fontSize="inherit" sx={{ color: '#29B6F6' }} />, 
    title: "Foco Total",
    text: "Com vitaminas do complexo B que auxiliam na concentração e agilidade mental. Ideal para quem precisa de performance."
  },
  {
    id: 3,
    icon: <VerifiedUserIcon fontSize="inherit" sx={{ color: '#9C27B0' }} />,
    title: "Zero Açúcar",
    text: "Todo o sabor doce que você ama, adoçado de forma inteligente. 0 calorias vazias, 100% de satisfação."
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      type: "spring"
    }
  })
};

const About = () => {
  return (
    <section className="about-section" id="about">
      
      <div className="about-header">
        <motion.h2 
          className="about-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Por que escolher 
          <span className="fruitx-logo">
            <span className="brand-fruit">Fruit</span>
            <span className="brand-x">X</span>
          </span>
        </motion.h2>
        <motion.p 
          className="about-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Não somos apenas mais um energético. Somos a fusão perfeita entre a energia que você precisa e a performance que sua rotina exige.
        </motion.p>
      </div>

      <div className="benefits-grid">
        {benefits.map((item, index) => (
          <motion.div
            key={item.id}
            className="benefit-card"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
          >
            <div className="icon-box">
              {item.icon}
            </div>
            <h3 className="card-title">{item.title}</h3>
            <p className="card-text">{item.text}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default About;