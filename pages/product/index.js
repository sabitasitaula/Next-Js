import {useRouter} from 'next/router'


function index() {
    const router=useRouter()
    const handleClick=()=>{
        router.push('/about')
    }
    
    return (
        <div>
            <h1>product 1</h1>
            <h1>product 2</h1>
            <h1>product 3</h1>
            

            <button onClick={handleClick}>Place order</button>
        </div>
    )
}

export default index
