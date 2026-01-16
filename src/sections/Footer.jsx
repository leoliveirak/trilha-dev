import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, IconButton, Snackbar, Alert } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import './Footer.css';

const Footer = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ open: false, type: 'success', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;     
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;   
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;     

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
      .then((result) => {
          setLoading(false);
          setFeedback({ open: true, type: 'success', message: 'Mensagem enviada com sucesso!' });
          e.target.reset();
      }, (error) => {
          setLoading(false);
          setFeedback({ open: true, type: 'error', message: 'Erro ao enviar. Tente novamente.' });
          console.log(error.text);
      });
  };

  const handleClose = () => setFeedback({ ...feedback, open: false });

  return (
    <footer className="footer-section" id="contact">
      <div className="footer-container">
        <div className="contact-form-area">
          <h2>Fale com a gente</h2>
          <p className="contact-subtitle">Dúvidas, parcerias ou quer apenas elogiar o shape? Manda bala.</p>
          
          <form ref={formRef} onSubmit={sendEmail} className="footer-form">
            <input 
              type="text" 
              name="user_name" 
              placeholder="Seu Nome" 
              className="form-input" 
              required 
            />
            <input 
              type="email" 
              name="user_email" 
              placeholder="Seu E-mail" 
              className="form-input" 
              required 
            />
            <textarea 
              name="message" 
              placeholder="Sua Mensagem" 
              rows="4" 
              className="form-textarea" 
              required
            ></textarea>

            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={loading}
              endIcon={<SendIcon />}
              sx={{
                backgroundColor: '#A2E15A',
                color: '#111',
                fontWeight: 'bold',
                padding: '12px',
                '&:hover': { backgroundColor: '#8ED145' }
              }}
            >
              {loading ? 'Enviando...' : 'Enviar Mensagem'}
            </Button>
          </form>
        </div>

        <div className="footer-info">
          <div>
            <div className="footer-logo">
              <span style={{color:'white'}}>Fruit</span><span style={{color:'#A2E15A', fontFamily:'Rubik Iso'}}>X</span>
            </div>
            <div className="social-links">
              <IconButton sx={{color: 'white', border: '1px solid #333'}} href='https://www.instagram.com/ejpixel/'><InstagramIcon /></IconButton>
              <IconButton sx={{color: 'white', border: '1px solid #333'}} href='https://www.instagram.com/ejpixel/'><TwitterIcon /></IconButton>
              <IconButton sx={{color: 'white', border: '1px solid #333'}} href='https://www.linkedin.com/company/ejpixel/'><LinkedInIcon /></IconButton>
            </div>
          </div>

          <ul className="footer-links-list">
            <li><a href="#hero" className="footer-link">Home</a></li>
            <li><a href="#products" className="footer-link">Produtos</a></li>
            <li><a href="#about" className="footer-link">Sobre</a></li>
            <li><a href="#" className="footer-link">Termos de Uso</a></li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        © 2026 FruitX Energy. Todos os direitos reservados. Feito para dominar.
      </div>

      <Snackbar open={feedback.open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={feedback.type} sx={{ width: '100%' }}>
          {feedback.message}
        </Alert>
      </Snackbar>
    </footer>
  );
};

export default Footer;