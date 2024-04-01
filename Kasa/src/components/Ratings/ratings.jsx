import emptyStar from "../../assets/images/emptyStar.png";
import fullStar from "../../assets/images/fullStar.png";

export function Ratings ({ dataCurrentLogements }) {
  const rating = dataCurrentLogements.rating;
  const stars = [];
  for (let i = 1; i <= 5; i++) {
   if (i <= rating) {
    stars.push(
      <span key={i}>
        <img src={fullStar} alt="étoile pleine" className="star" />
      </span>
    );
   } else {
    stars.push(
      <span key={i}>
        <img src={emptyStar} alt="étoile vide" className="star" />
      </span>
    )
   }
   return <div className="ratings-container">{stars}</div>;
  }
}