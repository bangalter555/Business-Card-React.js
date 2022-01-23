import "../styles/Card.css";
import ProfilePic from "../images/profile-picture.jpg";
import Info from "./Info-card";
import Footer from "./Footer";

export default function Card() {
  return (
    <div className="profile-card">
      <img src={ProfilePic} className="image" />
      <Info />
      <Footer />
    </div>
  );
}
