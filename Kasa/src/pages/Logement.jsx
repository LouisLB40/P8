import { useEffect, useState } from "react";
import Data from "../data/data.json";
import { useNavigate, useParams } from "react-router-dom";
import { Carrousel } from "../components/Carrousel/carrousel";
import { InfoLogements } from "../components/Logements/logements";

export function Logement() {
  const [dataLogementPhotos, setDataLogementPhotos] = useState(
    []
  );
  const [dataCurrentLogement, setDataCurrentLogement] = useState({});
  const id = useParams("id").id;
  const navigate = useNavigate();

  const annonce = Data.find((annonce) => annonce.id === id)
  console.log(annonce)

  const titre = annonce.title
  const location = annonce.location
  const userName = annonce.host.name
  const rating = annonce.rating
  const tags = annonce.tags
  const pictures = annonce.pictures
  const equipements = annonce.equipments
  const description = annonce.description



  return (
    <main className="logement-container">
      <Carrousel photos={pictures} />
      <InfoLogements
        title={titre || ""}
        location={location || ""}
        tags={tags || []}
        host={userName || {}}
        rating={rating}
        equipements={equipements}
        description={description}
      />
    </main>
  );
}