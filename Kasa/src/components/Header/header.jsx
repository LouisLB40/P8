import  logo_kasa  from "../../assets/images/LOGO.png";
import { NavLink } from "react-router-dom";

export function Header() {
  return ( 
    <header>
      <img src={logo_kasa} alt="Logo kasa" id="header-logo"></img>
        <nav className="header-links">
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/about">A propos</NavLink>
        </nav>
    </header>
  );
}