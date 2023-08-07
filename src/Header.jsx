import { Link } from "react-router-dom";
import "./Header.css";
import "./Buttons.css";
import HeaderImage from "./assets/chcaa_logo.png";

export default function Header() {
  return (
    <header className="Header">
      <div className="HeaderWrapper">
        <Link to="/computational-thinking-vite">
          <div className="Logo">
            <img src={HeaderImage} alt="Business Ideas logo" />
          </div>
        </Link>
        <div className="HeaderText">
          <h1>Problem Solving</h1>
        </div>
        <div className="HeaderButtonsWrapper">
          <button className="button">About</button>
          <button className="button">Lessons</button>
        </div>
      </div>
    </header>
  );
}
