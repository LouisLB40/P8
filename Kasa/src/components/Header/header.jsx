import  logo_kasa  from "../../assets/LOGO.png";

export function Header() {
  return ( 
    <header>
      <img src={logo_kasa} alt="Logo kasa"></img>
      <nav>
        <a href="/">Accueil</a>
        <a href="/a_propos">à propos</a>
      </nav>
    </header>
  );
}