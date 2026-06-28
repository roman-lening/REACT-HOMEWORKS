import spotify from "../../assets/spotify.svg"
import styles from "./style.module.css"
function Header() {
    return (
        <img src={spotify} alt="spotify" className={styles.img} />
    )
}
export default Header;