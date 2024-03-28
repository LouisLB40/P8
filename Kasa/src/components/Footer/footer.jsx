import  logo_kasa_footer  from "../../assets/LOGO (1).png";

export function Footer() {
  return ( 
    <footer>
      <div id="footer-logo">
        <img src={logo_kasa_footer} alt="Logo kasa"></img>
      </div>
      <div id="footer-copyright">
        <h3>© 2023 Kasa. All rights reserved</h3>
      </div>
    </footer>
  );
}