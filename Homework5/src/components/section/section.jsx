import styles from "./style.module.css";
import IconHover from "../iconHover/iconHover";
function Section({ links }) {
  return (
    <section className={styles.block}>
      <h1 className={styles.h1}>LIFE IS WASTED ON THE LIVING</h1>
      <h2 className={styles.h2}>
        Sign in <br /> with
      </h2>
      <div className={styles.links}>
        {links.map((item) => (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <IconHover title ={item.title} green={item.green} blue={item.blue} />
          </a>
        ))}
      </div>
    </section>
  );
}
export default Section;
