import { useState } from "react";
import Data from "../../data/data.json";
import { Card } from "../Cards/cards";

export function Gallery () {
  const [logements] = useState(Data);
  console.log(logements)

  return (
    <>
      <div className="gallery-container">
        <div className="gallery">
          {logements.map((item) => (
            <Card 
              id={item.id}
              key={item.id}
              cover={item.cover}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </>
  );
}