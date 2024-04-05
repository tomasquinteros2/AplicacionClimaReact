import React, { useState } from 'react'


export const WheaterApp = () => {

    const urlbase = 'https://api.openweathermap.org/data/2.5/weather?q'
    
    const apiKey = "d47692e5ae7fd9fcd02a5a82b9711afd"

    const [ciudad, setCiudad] = useState("")
    const [dataClima, setDataClima] = useState("")

    const difKelvin = 273.15

    const handleCambioCiudad = (event) => {
        setCiudad(event.target.value)
    } 
    
    const handleSubmit = (event) => {
        event.preventDefault()
        if(ciudad.length>0){
            fetchClima()
        }
    }
    //={city name}&appid={API key}
    const fetchClima = async () => {
        try{
            const response = await fetch(`${urlbase}=${ciudad}&appid=${apiKey}&lang=sp`)
            const data = await response.json()
            setDataClima(data)
        }
        catch(error){
            console.error(error)
        }
    }
  return (
    <div className='container'>
        <h1>Aplicacion De Clima</h1>

        <form onSubmit={handleSubmit}>
            <input 
             type="text"
             value={ciudad} 
             onChange={handleCambioCiudad}/>
            <button type='submit'>Buscar</button>
        </form>
        {
            dataClima && (
                <div>
                    <h2>{dataClima.name}</h2>
                    <p>Temperatura: {parseInt(dataClima?.main.temp - difKelvin)}°c</p>
                    <p>Condicion Meteorologica : {dataClima.weather[0].description}</p>
                    <img src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`} alt="" />
                </div>
            )
        }
    </div>
  )
}
