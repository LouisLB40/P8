import { NavLink } from "react-router-dom";

export function Error() {
  return (
    <section className="error-page">
      <h1 className="error-page_title">404</h1>
      <div className="error-page_description">
        Oups! La page que vous demandez n'existe pas.
      </div>
      <nav className="return">
        <NavLink to="/">Retourner sur la page d'accueil</NavLink>
      </nav>
    </section>
  );
}