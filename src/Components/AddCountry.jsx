import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export const AddCountry = () => {
    const [data, setData] = useState({
        country: ""
    })
    const handleChange = (e) => {
        const {className, value} = e.target;
        setData({
            ...data,
            [className]: value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post("https://my-json-server.typicode.com/Manjunath-BV23/city/citydata", data).then(() => {
            console.log(data)
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Add Country</label>
                <input type="text" className="country" value={data.country} onChange={handleChange}/>
                <input type="submit" value={"Add Country"}/>
            </form>

            <Link to="/"><button>Goto Home</button></Link>
        </div>
    )
}