import React from "react";
import Weather from "./components/Weather";

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[url('https://cdn.pixabay.com/photo/2018/08/23/07/35/thunderstorm-3625405_960_720.jpg')] bg-cover ">
      {" "}
      <h1 className="absolute top-0 text-5xl font-bold bg-clip-text text-transparent  bg-gradient-to-tr from-red-600 via-teal-400 to-violet-900">
        Weather App
      </h1>
      <Weather />
    </div>
  );
};

export default App;
