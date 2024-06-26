import { Link } from "react-router-dom";

export function Card({ cover, title, id }) {
  return (
    <Link to={`logement/${id}`}>
      <div id="cards-container">
        <img src={cover} alt={title} id="card-container_img" />
        <h2 id="card-container_title">{title}</h2>
      </div>
    </Link>
  ); 
}