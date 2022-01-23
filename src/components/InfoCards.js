import "../styles/InfoCards.css";

export default function InfoCards(props) {
  return (
    <div className="section-card">
      {props.title}
      {props.text}
    </div>
  );
}
