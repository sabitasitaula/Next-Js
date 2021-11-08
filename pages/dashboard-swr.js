import useSWR from "swr";

const fetcher= async ()=>{
    const res= await fetch('http://localhost:4000/dashboard')
    const data= await res.json()
    return data
} 
function DashboardSWR(){
    const {data,error}= useSWR('dashboard', fetcher)
    if(error) return 'An error has occured'
    if(!data) return 'Loading'

    return(
        <div>
            <h2>Dashboard</h2>
            <h2>Posts - {data.posts}</h2>
            <h3>Likes- {data.likes}</h3>
            <h3>Followers- {data.followers}</h3>
            <h3>Following- {data.following}</h3>

        </div>
    )
}

export default DashboardSWR