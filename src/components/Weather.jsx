import React, { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7ba1fbfc4aa2748f162f370158d1b94b&units=metric`
  const handleClick = async () => {
    console.log(city);
    
    try {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data));
    } catch (error) {
      console.log(error);
    }
    console.log(data.weather[0].main)
  };
  return (
    <div className="flex-col flex justify-between p-10 items-center glass h-1/2 md:w-1/2 w-5/6 rounded-xl space-y-5">
      <div>
        <div className="flex flex-col">
          <input
            className="rounded-md p-2 outline-none bg-transparent shadow-inner shadow-slate-900 placeholder:text-slate-700 no-underline"
            placeholder="Enter city..."
            onChange={(event) => {
              const str = event.target.value;
              setCity(str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
            }}
          />
        </div>
        <button
          className="text-center bg-gradient-to-r from-teal-700 to-cyan-600 w-full rounded-lg mt-5 ease-in-out shadow-sm shadow-black p-2 text-white hover:animate-bounce"
          onClick={() => handleClick()}
        >
          Search
        </button>
      </div>
      <div className=" flex flex-col flex-1 justify-center items-center w-full  rounded-lg shadow-inner shadow-slate-900 p-2 gap-5 text-xl font-bold">
        <div className="flex w-full px-5 justify-between items-center">
            <p className="">{data?data.main.temp:'--'}°C</p>
            <p>{data?data.name:"------"}</p>
        </div>
        <div className=" w-full px-5 ">{data?data.weather[0].main:"----"}</div>
      </div>
    </div>
  );
};

export default Weather;
