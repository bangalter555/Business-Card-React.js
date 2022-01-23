import "../styles/Card.css";
import ProfilePic from "../images/profile-picture.jpg";
import InfoContainer from "./InfoContainer";
import Footer from "./Footer";

export default function Card() {
  return (
    <div className="profile-card">
      <img src={ProfilePic} className="image" />
      <InfoContainer />
      <Footer />
    </div>
  );
}
