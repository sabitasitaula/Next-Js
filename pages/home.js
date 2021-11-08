import Navbar from "../components/Navbar"
import styles from '../styles/home.module.css'

const home = () => {
    return (
        <div>
            <Navbar />
            <h1 className={styles.cde}>Hello world home page</h1>
        </div>
    )
}

export default home
