import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Clock({ city, timeZone }) {
  const [time, setTime] = useState();
  const cityLink = city.toLowerCase().replace(" ", "");
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString("sv-SE", { timeZone }));
    }, 1000);
  }, []);

  return (
    <div
      className="flex md:flex-col justify-between items-center 
    md:items-start p-6 bg-slate-200 rounded-md w-full md:w-auto mb-4"
    >
      <div className="text-lg text-gray-600">{city}</div>
      <div className="text-3xl text-gray-900 font-semibold font-mono">
        {time}
      </div>
      <div className=" text-gray-600 underline hover:text-gray-400">
        <Link to={`clock/${cityLink}`}>bigger</Link>
      </div>
    </div>
  );
}
