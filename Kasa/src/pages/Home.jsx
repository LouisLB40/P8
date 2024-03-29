import { Banner } from "../components/Banner/Banner";
import { Gallery } from "../components/Gallery/Gallery";
import homeBanner from "../assets/images/Home_Banner.png";

export function Home() {
  return (
    <>
      <Banner title="Chez vous, partout et ailleurs" src={homeBanner} alt="une falaise" />
      <Gallery />
    </>
  )
}