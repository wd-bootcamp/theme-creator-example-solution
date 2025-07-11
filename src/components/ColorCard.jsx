import "./ColorCard.css";

export default function ColorCard({ color }) {
  return (
    <article className="colorcard">
      <div className="colorcard__info">
        <span className="colorcard__role">{color.role}</span>
        <span className="colorcard__value">{color.value}</span>
      </div>
      <div
        className="colorcard__display"
        style={{ "--display-color": color.value }}
      ></div>
    </article>
  );
}
