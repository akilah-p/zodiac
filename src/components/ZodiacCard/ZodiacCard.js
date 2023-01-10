import './ZodiacCard.css';
export default function ZodiacCard({ name, dates, id, symbol }) {
    return (
        <div className="zodiac-card">
            <img alt={name} src={`./signs/${id}.png`} />
            <span className="name">{name}</span>
            <span>{dates}</span>
            <span>{symbol}</span>
        </div>
    );
}