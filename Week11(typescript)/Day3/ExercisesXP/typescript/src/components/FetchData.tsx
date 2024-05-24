import { useState, useEffect} from 'react'

interface User {
    name: string;
    email: string;
    id: string | number;
}

const FetchData = () => {
    const [data , setData] = useState<User[]>([])
    const url = 'https://jsonplaceholder.typicode.com/users'
    const fetchData = async () => {
        try {
            const response = await fetch(url)
            const responseData = await response.json()
            setData(responseData)
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    
  return (
    <>
        <div>FetchData</div>
        {
            data.map((item, i) => (
                <div key={i}>
                    <h3>{item.name}</h3>
                    <p>{item.email}</p>
                </div>
            ))
        }
    </>
   
  )
}

export default FetchData