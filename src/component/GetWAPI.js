import React,{useEffect,useState} from "react";
import axiox from "axios"
import { WiStrongWind } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";
import { AiFillEye } from "react-icons/ai";

 <head>
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
</head>

const GetWAPI =()=>{
    const [city,setCity]=useState(null)
    const [search,setSearch]=useState('Delhi')

    useEffect(() => {
        axiox.get(`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d72f60c2c390c46c36a46728c675ea85`)
        .then(res=>{
            setCity(res.data)
            console.log(search)
           
        })
        .catch(error => console.log(error))
     }, [search])
     const onChangeHandler =(event)=>{
        setSearch(event.target.value)
     }
     const OnClickHander =()=>{
         {
             <div>
                 <h1>{city.temp}</h1>

             </div>
        }
     }

return(
    <>
    <div className="Card">
    <div className="mainDiv">
    <h1 className="searchyc" >Search your City </h1>
    <div className="divofnput">
        <input className="InputSearch" type="search" placeholder="Search city" onChange={onChangeHandler} />
    </div>
    <div className="Info">
        
        {
            !city ?(
                <p>NO DATA FOUND</p>
            ):(
                <div className="weatherData">
                <p>Weather in {city.name}</p>
                
                <p className="tempPtag">{city.main.temp} °C</p>
                <div className="minmax">
                <p className="min" >Min Temp :{city.main.temp_min}</p>
                <p className="s">Max Temp :{city.main.temp_max}</p>
                </div>

                <div className="block">

                    <div className="moreinfo">

                        <p className="wiraindropPTAG"><WiHumidity size='3em' viewBox="-6 3 30 12" /> {city.main.humidity}</p>
                        <p><AiFillEye size='1.5em'/> {city.visibility}</p>

                    </div>

                            <div className="moreinfo">
                                <p className="lastrow"><WiStrongWind size='3em' viewBox="-1 0 30 12" />{city.wind.speed}</p>
                                <p>pressure {city.main.pressure} Pa</p>
                            </div>

                </div>
                
                
                
                
  
                </div>
            )
            
        }
      
        
    </div>
    </div>
    </div>
   
    </>
)
}
export default GetWAPI;