import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { timeZones } from "./timeZones";

export default function BigClock() {
  const [time, setTime] = useState();
  const params = useParams();
  const timeZone = timeZones[params.cityKey].timeZone;

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString("sv-SW", { timeZone }));
    }, 1000);
  }, []);
  return (
    <div className="flex justify-between md:flex-col mb-4 p-8 pr-14 bg-slate-200 rounded-md items-center md:items-start">
      <div className="text-2xl text-gray-600 font-medium">
        {timeZones[params.cityKey].city}
      </div>
      <div className="text-xl text-blue-600 font-bold uppercase">
        {timeZones[params.cityKey].country}
      </div>
      <div className="text-5xl font-mono font-black md:mt-4">{time}</div>
    </div>
  );
}
