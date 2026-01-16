import './Marquee.css';

const Marquee = () => {
  const items = [
    "Zero Açúcar",
    "Sabor fruta",
    "Vegano",
    "Sem Glúten",
    "Vitaminas B6 & B12",
    "Foco Extremo"
  ];

  const content = [...items, ...items, ...items, ...items];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {content.map((item, index) => (
          <div key={index} className="marquee-item">
            {item} <span className="marquee-dot"></span>
          </div>
        ))}
      </div>
      
      <div className="marquee-content" aria-hidden="true">
        {content.map((item, index) => (
          <div key={`dup-${index}`} className="marquee-item">
            {item} <span className="marquee-dot"></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;