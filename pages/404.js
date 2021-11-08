import Link from 'next/link'
import router from 'next/router'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
const error = () => {

    const HandleInput=()=>{
        router.push("/")
    }

    useEffect(()=>{
        setTimeout(()=>{
            router.push("/");
        },3000);
    },[])
    return (
        <div>

            <div>
                <nav>
                    <ul>
                        <li>
                            <Link href="/home">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <a>About</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a>Contact</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <h1>Sorry page not found</h1>
            <p>The page you are looking for is removed.</p>


            <a onClick={HandleInput}>Back to home page</a>
{/* 
            <Link href="/">
                <a>Back to Home Page</a>
            </Link> */}


        </div>
    )
}

export default error