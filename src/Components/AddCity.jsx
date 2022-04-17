import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export const AddCity = () => {
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
            <Link to="/"><button>Goto Home</button></Link>
            <form onSubmit={handleSubmit}>
                
                <label htmlFor="">Add City</label>
                <input type="text" className="city" value={data.city} onChange={handleChange}/><br />
                <label htmlFor="">Add population</label>
                <input type="text" className="population" value={data.population} onChange={handleChange}/><br />
                <label htmlFor="">Add Country</label>
                <input type="text" className="country" value={data.country} onChange={handleChange}/>
                <br /><br />

                <input type="submit" value={"Add City"}/>
            </form>
        </div>
    )
}