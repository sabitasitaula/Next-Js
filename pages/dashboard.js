import {useState,useEffect} from 'react'

function Dashboard() {

    const [Loading, setLoading] = useState(true)
    const [dashboardData, setdashBoardData]=useState('');
    
    useEffect(()=>{
        async function fetchDashBoardData(){
            const res= await fetch('http://localhost:4000/dashboard')
            const data= await res.json()

            setLoading(false)
            setdashBoardData(data)
        }
        fetchDashBoardData();
    },[])

    if(Loading){
        console.log("Loading....")
    }
    return (
        <div>
            <h1>Dashboard data</h1>
            <h3>Posts- {dashboardData.posts}</h3>
            <h3>Likes- {dashboardData.likes}</h3>
            <h3>Followers- {dashboardData.followers}</h3>
            <h3>Following- {dashboardData.following}</h3>

        </div>
    )
}

export default Dashboard

