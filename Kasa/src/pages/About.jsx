import aboutBanner from "../assets/images/About_Banner.png";
import { Collapse } from "../components/Collapse/collapse";
import { Banner } from "../components/Banner/Banner";

export function About() {
  return (
    <section>
      <Banner title="" src={aboutBanner} alt="une vallée" />
      <Collapse
      />
    </section>
  )
}