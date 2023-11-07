import axios from "axios";
import { useEffect } from "react";

const Home = () => {
    useEffect(()=>{
        axios.get("http://localhost:5000/services")
        .then(data => console.log(data))
    },[])
    return (
        <div>
            <div>
                <h1 className="text-center text-5xl text-emerald-600 font-bold py-4">Popular Services</h1>

            </div>
        </div>
    );
};

export default Home;