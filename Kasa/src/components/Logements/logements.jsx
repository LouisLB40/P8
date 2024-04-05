import { Collapse } from "../Collapse/collapse";
import { Ratings } from "../Ratings/ratings";
import Tags from "../Tags/tags";


export function infoLogements ({ title, location, tags, host, dataCurrentLogements }) {
  return (
    <>
      <main className="logements-container_infos">
        <section className="logements-container-infos_leftPart">
          <h1 className="logements-container_title">{title}</h1>
          <h2 className="logements-container_location">{location}</h2>
          <Tags tags={tags} />
        </section>
        <section className="logements-container-infos_rightPart">
          <div className="host-infos">
            <h3 className="logements-container_name">{host?.name}</h3>
            <img src={host?.picture} className="profil" alt="" />
          </div>
          <Ratings dataCurrentLogements={dataCurrentLogements} />
        </section>
      </main>
      <section className="logements-collapse">
        <div className="logements-collapse_item">
          <Collapse title={"Description"} content={dataCurrentLogements.description} />
        </div>
        <div className="logements-container_item">
          <Collapse title={"Equipements"} content={dataCurrentLogements.equipements} />
        </div>
      </section>
    </>
  );
}