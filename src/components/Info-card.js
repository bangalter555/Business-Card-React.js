import "../styles/Info-card.css";
import Titles from "./Titles-card";
import EmailButton from "./Email-button";
import LinkedInButton from "./Linkedin-button";
import AboutCard from "./About-Card";
import InterestsCard from "./Interests-card";

export default function Info() {
  return (
    <div className="info-card">
      <Titles />
      <EmailButton />
      <LinkedInButton />
      <AboutCard />
      <InterestsCard />
    </div>
  );
}
