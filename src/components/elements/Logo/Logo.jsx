import "./Button.css";

export default function Logo() {
  return (
    <div className="header__section-logo">
      <button type="link" className="header__section-logo-button">
        Net<span className="header__section-logo-button-color">Notes.</span>
      </button>
    </div>
  );
}
