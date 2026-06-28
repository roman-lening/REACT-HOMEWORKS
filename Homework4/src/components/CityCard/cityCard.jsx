import styles from "./style.module.css";
function CityCard({ city }) {
  if (!city) return null;
  return (
    <div className={styles.card}>
      <h2>{city.name}</h2>
      <img src={city.imageUrl} alt={city.name} className={styles.image} />
      <p>{city.description}</p>
      <ul>
        {city.facts.map((fact) => (
          <li key={fact}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default CityCard;
