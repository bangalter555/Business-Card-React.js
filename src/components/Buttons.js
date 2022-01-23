import "../styles/Buttons.css";

const clickingOnLinkedinBtn = () => {
  document.addEventListener("click", (e) => {
    let target = e.target;
    if (target.matches(".fa-linkedin"))
      window.open(
        "https://www.linkedin.com/in/esteban-lopez-alonzo-0615431b9/"
      );
  });
};

export default function Buttons(props) {
  clickingOnLinkedinBtn();
  return (
    <button id={props.id} className="btn">
      {props.ReactElement}
    </button>
  );
}
