import './zodiacCard.css';
import '../../data.js';

export default function ZodiacCard({ name, dates, symbol }) {
  return (
    <div className="zodiac-card">
      <img alt={name} src={`./signs/${name}.png`} />
      <span className="name">{name}</span>
      <span>{dates}</span>
      <span>{symbol}</span>
    </div>
  );
}

//
