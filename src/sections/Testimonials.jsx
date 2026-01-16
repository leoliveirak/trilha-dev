import { motion } from 'framer-motion';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import './Testimonials.css';

import toguroProfile from '../assets/toguro-profile.png';
import toguroAction from '../assets/toguro-action.png';
import athleteProfile from '../assets/athlete-profile.jpg';
import athleteAction from '../assets/athlete-action.png';
import gamerProfile from '../assets/gamer-profile.jpg';

const testimonials = [
  {
    id: 1,
    name: "Toguro",
    role: "Em busca do shape inexplicável",
    quote: "Em pleno 2026, ano da tecnologia, você conhece o saBÔR Uva? Esse FruitX é diferenciado, pai. Energia pura pro treino. O shape vem!",
    profileImg: toguroProfile,
    actionImg: toguroAction,
    accentColor: "#C1379C" 
  },
  {
    id: 2,
    name: "Ana Clara",
    role: "Maratonista",
    quote: "Correr 42km exige muito do corpo. O FruitX de Melancia me dá o gás que preciso nos quilômetros finais sem pesar no estômago.",
    profileImg: athleteProfile,
    actionImg: athleteAction,
    accentColor: "#A2E15A"
  },
  {
    id: 3,
    name: "Pedro 'ProGamer'",
    role: "Streamer & E-atleta",
    quote: "Nas viradas noturnas jogando competitivo, o foco é tudo. O de Laranja me mantém alerta sem aquela tremedeira de café. O sabor é muito refrescante.",
    profileImg: gamerProfile,
    actionImg: null,
    accentColor: "#F8BE21"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <motion.h2 
        className="testimonials-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Quem prova, <span style={{color: '#A2E15A'}}>vicia</span>.
      </motion.h2>

      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <motion.div 
            key={item.id}
            className={`testimonial-card ${!item.actionImg ? 'no-image' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            
            {/*Só mostra esse bloco SE tiver imagem */}
            {item.actionImg && (
              <div className="testimonial-image-side">
                <img src={item.actionImg} alt={`${item.name} action`} className="action-img" />
              </div>
            )}

            <div className="testimonial-content-side">
              <FormatQuoteIcon className="quote-icon" sx={{ color: item.accentColor }} />
              <p className="testimonial-quote">"{item.quote}"</p>
              
              <div className="testimonial-author">
                <img src={item.profileImg} alt={item.name} className="profile-img" />
                <div className="author-info">
                  <h4 style={{ color: item.accentColor }}>{item.name}</h4>
                  <p>{item.role}</p>
                </div>
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;