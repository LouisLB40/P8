import aboutBanner from "../assets/images/About_Banner.png"
import { Collapse } from "../components/Collapse/collapse"

export function About() {
  return (
    <section>
      <div className="img-container">
        <img 
          className="img-banner"
          src={aboutBanner}
          alt="Une vallée"
        />
      </div>
      <Collapse
      />
    </section>
  )
}