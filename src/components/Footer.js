import "../styles/Footer.css";

const hoveringOnFooterLinks = () => {
  document.addEventListener("mouseover", (e) => {
    let target = e.target;
    if (target.matches(".footer a i")) {
      target.classList.add("hovered");
    }
  });
};

const hoveringOutFooterLinks = () => {
  document.addEventListener("mouseout", (e) => {
    let target = e.target;
    if (target.matches(".footer a i")) {
      target.classList.remove("hovered");
    }
  });
};

export default function Footer() {
  let FacebookLink = `https://www.facebook.com/esteban.lopez.501151`,
    InstagramLink = `https://www.instagram.com/estebanlopezalonzo/?hl=es`,
    GitHubLink = `https://github.com/bangalter555`;
  hoveringOnFooterLinks();
  hoveringOutFooterLinks();
  return (
    <footer className="footer">
      <a href={FacebookLink} target="_blank">
        <i className="fab fa-facebook-square"></i>
      </a>
      <a href={InstagramLink} target="_blank">
        <i className="fab fa-instagram-square"></i>
      </a>
      <a href={GitHubLink} target="_blank">
        <i className="fab fa-github-square"></i>
      </a>
    </footer>
  );
}
