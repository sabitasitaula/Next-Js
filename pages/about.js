import Navbar from "../components/Navbar"
import styles from '../styles/about.module.css'
import Image from 'next/image'

function about() {
    return (
        <div >
            <Navbar />
            <h1 className={styles.abc}>Hello world about page</h1>
            <h2 style={{textAlign:"center"}}><Image src="/2.PNG" height="500" width="500" alt="myimage" /></h2>

            
        </div>
    )
}

export default about
