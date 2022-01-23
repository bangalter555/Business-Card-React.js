import "../styles/Buttons.css";

const clickingOnLinkedinBtn = () => {
  document.addEventListener("click", (e) => {
    let target = e.target;
    if (target.matches(".linkedin-btn"))
      window.open(
        "https://www.linkedin.com/in/esteban-lopez-alonzo-0615431b9/"
      );
  });
};

export default function LinkedInButton() {
  clickingOnLinkedinBtn();
  return (
    <button className="linkedin-btn btn">
      <i className="fab fa-linkedin"></i> LinkedIn
    </button>
  );
}
