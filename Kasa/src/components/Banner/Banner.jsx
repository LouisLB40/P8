export function Banner({title, src, alt}) {
  return (
    <div className="img-container">
      <img
        className="img-banner"
        src={src}
        alt={alt}
      />
      <h2 className="slogan">{title}</h2>
    </div>
  )
}