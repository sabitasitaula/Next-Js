import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar';

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    const paths = data.map((currElement) => {
        return {
            params: { pageno: currElement.id.toString() },
        }
    })
    return {
        paths,
        fallback: false,
    }
};

export const getStaticProps = async (context) => {
    const id=context.params.pageno;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return {
        props: {
            data
        }
    }
}

function pageno({data}) {
    const router = useRouter();
    const route = router.query.pageno
    return (
        <div>
            <Navbar />
            <h3>{data.id}</h3>
            <h2>{data.title}</h2>
            <p>{data.body}</p>

        </div>
    )
}

export default pageno
