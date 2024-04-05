export function Tags ({ tags }) {
  return (
    tags &&
    Array.isArray(tags) && (
      <ul className="logements-container_tags">
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    )
  );
}