import Navbar from "../../components/Navbar"
import Link from 'next/link'

const index = () => {
    return (
        <div>
            <Navbar />
            <h1 style={{color:"blue"}}>Hello world contact page</h1>
            <nav>
                <ul>
                    <li>
                        <Link href="contact/contact1">
                            <a>Contact1</a>
                        </Link>
                        <Link href="contact/contact2">
                            <a>Contact2</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default index
