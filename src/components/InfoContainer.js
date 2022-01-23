import "../styles/InfoContainer.css";
import Titles from "./Titles-card";
import Buttons from "./Buttons";
import InfoCards from "./InfoCards";

export default function InfoContainer() {
  return (
    <div className="info-card">
      <Titles />
      <Buttons
        id="email-btn"
        ReactElement={<i className="fas fa-envelope">Email</i>}
      />
      <Buttons
        id="linkedin-btn"
        ReactElement={<i className="fab fa-linkedin">LinkedIn</i>}
      />
      <InfoCards
        title={<h4>About</h4>}
        text={
          <p>
            I'm a software developer focused on solving daily problems. My
            favourites technologies to implement are JS, React, and CSS
          </p>
        }
      />
      <InfoCards
        title={<h4>Interests</h4>}
        text={
          <p>
            When I'm not working I like to relax and hang out with friends or
            family. I love to read and excercise.
          </p>
        }
      />
    </div>
  );
}
