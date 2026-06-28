import styles from "./style.module.css";
function CitySelector({ cities, onSelectCity }) {
  const handleChange = (e) => {
    const id = Number(e.target.value);
    const city = cities.find((c) => c.id === id);
    onSelectCity(city);
  };

  return (
    <div className={styles.wrapper}>
      <h1>Выберите город:</h1>
      <select className={styles.select} onChange={handleChange}>
        <option>---</option>
        {cities.map((city) => (
          <option key={city.id} value={city.id}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CitySelector;
