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

  useEffect(() => {
    const currentLogement = data.find((item) => item.id === id);
    if (currentLogement) {
      const logementPhotos = currentLogement.photos || [];

      setDataAccommodationPictures(accommodationPictures);
      setDataCurrentAccommodation(currentAccommodation);
    } else {
      navigate("*");
    }
  }, [id, navigate]);

  return (
    <main className="logement-container">
      <Carrousel photos={dataLogementPhotos} />
      <InfoLogements
        title={dataCurrentLogement.title || ""}
        location={dataCurrentLogement.location || ""}
        tags={dataCurrentLogement.tags || []}
        host={dataCurrentLogement.host || {}}
        dataCurrentLogement={dataCurrentLogement}
      />
    </main>
  );
}