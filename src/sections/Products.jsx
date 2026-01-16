import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './Products.css';

import AnimatedCan from '../components/AnimatedCan'; 

import labelWatermelon from '../assets/label-watermellon.png';
import labelGrape from '../assets/label-grape.png';
import labelOrange from '../assets/label-orange.png';

const products = [
  {
    id: 1,
    name: "Watermelon Crush",
    price: "9,90",
    label: labelWatermelon, 
    bgcolor: "#A2E15A", 
    shadowColor: "rgba(162, 225, 90, 0.4)"
  },
  {
    id: 2,
    name: "Grape Storm",
    price: "9,90",
    label: labelGrape,
    bgcolor: "#C1379C", 
    shadowColor: "rgba(193, 55, 156, 0.4)"
  },
  {
    id: 3,
    name: "Orange Sunset",
    price: "9,90",
    label: labelOrange,
    bgcolor: "#F8BE21", 
    shadowColor: "rgba(248, 190, 33, 0.4)"
  }
];

const Products = () => {
  return (
    <section className="products-section" id="products">
      <motion.h2 
        className="products-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Escolha o seu <span style={{ color: '#A2E15A' }}>X</span> Boost
      </motion.h2>

      <div className="products-grid">
        {products.map((product) => (
          <motion.div 
            key={product.id} 
            className="product-card"
            whileHover={{ y: -10 }} 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Círculo de Fundo */}
            <div 
              className="card-circle" 
              style={{ backgroundColor: product.bgcolor }}
            ></div>
            <div className="product-3d-wrapper">
               {/* Passamos o produto atual como "currentFlavor" para o componente saber qual rótulo usar */}
               <AnimatedCan currentFlavor={product} />
            </div>

            {/* Informações */}
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">R$ {product.price} <span>/unidade</span></p>
              
              <Button 
                variant="contained"
                fullWidth
                startIcon={<AddShoppingCartIcon />}
                sx={{
                  backgroundColor: '#222',
                  borderRadius: '30px',
                  padding: '10px',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: product.bgcolor,
                    color: '#fff' 
                  }
                }}
              >
                Comprar
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Products;