import React, { useEffect, useState } from "react";
import { data } from "react-router-dom";
import { Card, CardTitle, CardBody, CardSubtitle ,  Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, } from "reactstrap";

export default function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = "e469265bdcea82a115affa73eb3acfe8";
  const [city,setCity]= useState("DIYARBAKIR")

  useEffect(() => {
    fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=e469265bdcea82a115affa73eb3acfe8&units=metric` 
    )
      .then((res) => res.json())
      .then((data) => setWeatherData(data));
  }, [city]);
  console.log(weatherData);
  
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const cities = [
    "ADANA", "ADIYAMAN", "AFYONKARAHISAR", "AGRI", "AKSARAY", "AMASYA", "ANKARA", "ANTALYA", "ARDAHAN", "ARTVIN",
    "AYDIN", "BALIKESIR", "BARTIN", "BATMAN", "BAYBURT", "BILECIK", "BINGOL", "BITLIS", "BOLU", "BURDUR",
    "BURSA", "CANAKKALE", "CANKIRI", "CORUM", "DENIZLI", "DIYARBAKIR", "DUZCE", "EDIRNE", "ELAZIG", "ERZINCAN",
    "ERZURUM", "ESKISEHIR", "GAZIANTEP", "GIRESUN", "GUMUSHANE", "HAKKARI", "HATAY", "IGDIR", "ISPARTA", "ISTANBUL",
    "IZMIR", "K.MARAS", "KARABUK", "KARAMAN", "KARS", "KASTAMONU", "KAYSERI", "KIRIKKALE", "KIRKLARELI", "KIRSEHIR",
    "KILIS", "KOCAELI", "KONYA", "KUTAHYA", "MALATYA", "MANISA", "MARDIN", "MERSIN", "MUGLA", "MUS",
    "NEVSEHIR", "NIGDE", "ORDU", "OSMANIYE", "RIZE", "SAKARYA", "SAMSUN", "SIIRT", "SINOP", "SIVAS",
    "SANLIURFA", "SIRNAK", "TEKIRDAG", "TOKAT", "TRABZON", "TUNCELI", "USAK", "VAN", "YALOVA", "YOZGAT", "ZONGULDAK"
  ];
  
  
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  
   
  if (!weatherData) {

    return <div>Yükleniyor... </div>;
  }

 

  return (
    <div>
         
        <Dropdown isOpen={dropdownOpen} toggle={toggle} >
        <DropdownToggle caret>Select a city</DropdownToggle>
            <DropdownMenu className="dropsize" >
           {
            cities.map(c => <DropdownItem onClick={()=> setCity(c) } >{c}</DropdownItem>)
           }
            </DropdownMenu>
        </Dropdown>

      <h3>The Weather Of {city} </h3>
      {weatherData.list
        .filter((item) => item.dt_txt.includes("12:00:00"))
        .map((item, index) =>{
            const date = new Date(item.dt_txt)
            const dayName = days[date.getDay()];
            return(
            
                <Card className="card" >
                  <img alt="Sample" src={` https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} />
                  <CardBody>
                    <CardTitle tag="h5">{dayName}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      Temp: {item.main.temp}
                    </CardSubtitle>
                  </CardBody>
                </Card>
              )
        } )}
    </div>
  );
}
