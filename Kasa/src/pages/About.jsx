import aboutBanner from "../assets/images/About_Banner.png";
import { Collapse } from "../components/Collapse/collapse";
import { Banner } from "../components/Banner/Banner";
import aboutData from "../data/about-data.json";

export function About() {
  return (
    <section>
      <div>
        <Banner title="" src={aboutBanner} alt="une vallée" />
      </div>
      {aboutData.map((down, id) => (
        <Collapse
          key={id}
          downTitle={down.aboutTitle}
          downContent={down.aboutContent}
          containerclass={'down-btn-about'}
        />
      ))}
    </section>
  )
}
