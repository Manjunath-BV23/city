import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const Home = () => {
    const [citydata, setCitydata] = useState([])

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        axios.get("http://localhost:8080/citydata").then((res) => {
            setCitydata(res.data)
        })
    }

    const sortdata = () => {
        citydata.sort((a, b) => (a.population-b.population))
        setCitydata(citydata)
        console.log(citydata)
    }
    const filtercity = () => {
        citydata.sort((a, b) => (a.city-b.city))
        setCitydata(citydata)
        console.log(citydata)
    }

    return (
        <div>
            <h1>Welcome to City app</h1>
            <div>
                <Link to="/add-country"><button style={{
                    
                }}>Add Country</button></Link>
                <Link to="/add-city"><button>Add City</button></Link>

            </div><br />
            <hr />
            <div>
                <button onClick={filtercity}>Filter by Country</button>
                <button onClick={sortdata}>Sort by Population</button>

            </div>
            <hr />

            <table style={{
                border: "1px solid black",
                margin: "auto"
            }}>
                <thead>
                    <tr>
                        <th style={{
                            border:"1px solid black"
                        }}>Id</th>
                        <th style={{
                            border:"1px solid black"
                        }}>Country</th>
                        <th style={{
                            border:"1px solid black"
                        }}>City</th>
                        <th style={{
                            border:"1px solid black"
                        }}>Population</th>
                        <th style={{
                            border:"1px solid black"
                        }}>Edit</th>
                        <th style={{
                            border:"1px solid black"
                        }}>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {citydata.map((e, index) => {
                        return (
                            <tr>
                                <td>{e.id}</td>
                                <td>{e.country}</td>
                                <td>{e.city}</td>
                                <td>{e.population}</td>
                                <td>{"`Edit`"}</td>
                                <td>{"`Delete`"}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}