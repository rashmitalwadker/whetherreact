import React, { useEffect, useState } from "react";
import "./css/style.css";
const Tempapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");
    useEffect(() => {
        const fetApi = async() => {

            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ee08fb844034f79d957d00bec4ae3c7e
            `
            const response = await fetch(url);
            // console.log(response);
            const resJson = await response.json();
            console.log(resJson);
            setCity(resJson.main);
        };
        fetApi();


    }, [search])
    return ( < >
        <
        div className = "box" >
        <
        div className = "inputData" > < input type = "search"
        className = "inputField"
        onChange = {
            (event) => {
                setSearch(event.target.value)
            }
        }
        / ></div >

        {!city ? ( <
                p > no Data found < /p>

            ) :


                ( <
                div > <
                div className = "info" >
                <
                h2 className = "locations" > <
                i className = "fas fa-street-view" > < /i>{search}< /
                h2 >
                <
                h1 className = "temp" > { city.temp } < /h1> <
                h3 className = "tempmin_max" > Min: 5.25 cel | Max: 5.25 cel < /h3> < /
                div >
                <
                div className = "wave -one" > < /div> <
                div className = "wave -two" > < /div> <
                div className = "wave -three" > < /div></div >
            )
        }




        <
        /div> 


        <
        />
    );
};
export default Tempapp;