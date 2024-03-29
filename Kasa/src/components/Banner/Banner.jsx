import homepageBanner from "../../assets/images/Home_Banner.png"

export function Banner() {
  return (
    <div className="img-container">
      <img
        className="img-banner"
        src={homepageBanner}
        alt="une falaise"
      />
      <div className="slogan">Chez vous, partout et ailleurs</div>
    </div>
  )
}