import Navbar from "../../components/Navbar";
import Link from "next/link";

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return {
        props: {
            data
        }
    }
}

function blog({ data }) {

    return (
        <div>

            <Navbar />
            {
                data.slice(0,5).map((currElement) => {
                    return (
                        <div key={currElement.id}>
                            <h2>{currElement.id}</h2>
                            <Link href={`/blog/${currElement.id}`}>
                                <h3>{currElement.title}</h3>
                            </Link>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default blog
