import "./Header.css";

export default function Header() {
  return (
    <header className="Header">
      <div className="HeaderWrapper">
        <button>LOGO</button>
        <div className="HeaderButtonsWrapper">
          <button>About</button>
          <button>Lesson</button>
        </div>
      </div>
    </header>
  );
}
